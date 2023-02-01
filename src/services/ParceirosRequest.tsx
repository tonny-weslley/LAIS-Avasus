import http from "../http-common";

export async function getAll() {
    return http.get("/parceiros");
}

export async function get(id: any) {
    return http.get(`/parceiros/${id}`);
}

export async function getSome(limit: number, page: number) {
    return http.get(`/parceiros?_limit=${limit}&_page=${page}`);
}