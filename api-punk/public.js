import { BASE_URL } from "./config.js";
import { check } from "k6";
import { Httpx } from "../libs/httpx.js";

let session = new Httpx({ baseURL: BASE_URL });

export function getBeers(queryParameter, headers) {
    session.clearHeaders();
    session.addHeaders(headers);
    return session.get(`/v2/beers?${queryParameter}`);
}

export function getBeersWithoutParams() {
    return session.get(`/v2/beers`);
}

export default function () {
    check(getBeers(), {
        'is status 200': (r) => r.status === 200
    });

}