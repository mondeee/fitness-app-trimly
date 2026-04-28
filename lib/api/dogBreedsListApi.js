import { getDogApiBaseUrl } from './config';
import { getRequest } from './http';
export async function dogbreedsListApi(config) {
    return getRequest('/breeds/list/all', {
        baseURL: getDogApiBaseUrl(),
        ...config,
    });
}
