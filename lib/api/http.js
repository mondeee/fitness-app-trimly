import { apiClient } from './client';
export async function getRequest(url, config) {
    const { data } = await apiClient.get(url, config);
    return data;
}
export async function postRequest(url, body, config) {
    const { data } = await apiClient.post(url, body, config);
    return data;
}
export async function putRequest(url, body, config) {
    const { data } = await apiClient.put(url, body, config);
    return data;
}
export async function patchRequest(url, body, config) {
    const { data } = await apiClient.patch(url, body, config);
    return data;
}
export async function deleteRequest(url, config) {
    const { data } = await apiClient.delete(url, config);
    return data;
}
