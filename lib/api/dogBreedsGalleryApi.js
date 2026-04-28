import { getDogApiBaseUrl } from './config';
import { dogbreedsListApi } from './dogBreedsListApi';
import { getRequest } from './http';
const IMAGE_CONCURRENCY = 8;
export const dogBreedsSeedsQueryKey = ['dogBreeds', 'seeds'];
function capitalize(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
export function flattenBreedsToSeeds(message) {
    const rows = [];
    for (const [breed, subs] of Object.entries(message)) {
        if (subs.length === 0) {
            rows.push({ id: breed, label: capitalize(breed), apiPath: breed });
        }
        else {
            for (const sub of subs) {
                const apiPath = `${breed}/${sub}`;
                rows.push({
                    id: apiPath,
                    label: `${capitalize(sub)} ${capitalize(breed)}`,
                    apiPath,
                });
            }
        }
    }
    return rows;
}
export async function fetchDogBreedsSeeds(signal) {
    const list = await dogbreedsListApi({ signal });
    if (list.status !== 'success') {
        throw new Error('Dog API returned an unexpected status');
    }
    return flattenBreedsToSeeds(list.message);
}
async function fetchBreedRandomImage(apiPath, config) {
    try {
        const res = await getRequest(`/breed/${apiPath}/images/random`, { baseURL: getDogApiBaseUrl(), ...config });
        return res.message;
    }
    catch {
        return '';
    }
}
async function promisePool(items, limit, fn) {
    const result = new Array(items.length);
    let next = 0;
    async function worker() {
        for (;;) {
            const i = next++;
            if (i >= items.length)
                return;
            result[i] = await fn(items[i], i);
        }
    }
    const workers = Math.min(limit, items.length) || 1;
    await Promise.all(Array.from({ length: workers }, () => worker()));
    return result;
}
/**
 * Loads one page of gallery rows. The full breed list is fetched once and cached under {@link dogBreedsSeedsQueryKey}.
 */
export async function fetchDogBreedsGalleryPage(queryClient, offset, pageSize, signal) {
    let seeds = queryClient.getQueryData(dogBreedsSeedsQueryKey);
    if (!seeds) {
        seeds = await fetchDogBreedsSeeds(signal);
        queryClient.setQueryData(dogBreedsSeedsQueryKey, seeds);
    }
    const slice = seeds.slice(offset, offset + pageSize);
    const imageUrls = slice.length === 0
        ? []
        : await promisePool(slice, IMAGE_CONCURRENCY, (seed) => fetchBreedRandomImage(seed.apiPath, { signal }));
    const items = slice.map((seed, i) => ({
        id: seed.id,
        label: seed.label,
        imageUrl: imageUrls[i] ?? '',
    }));
    return {
        items,
        nextOffset: offset + pageSize,
        total: seeds.length,
    };
}
