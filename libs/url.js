const PROTOCOL = "https://";

export const API_PUNK = "api.punkapi.com";


export function baseUrl(DOMAIN_URL) {
    return `${PROTOCOL}${DOMAIN_URL}`;
}