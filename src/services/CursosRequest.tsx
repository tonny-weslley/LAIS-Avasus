import http from "../http-common";

export async function getAll() {
  return http.get("/cursos");
}

export async function get(id: number) {
  return http.get(`/cursos/${id}`);
}

export async function getFeatured(limit: number) {
  return http.get(`/cursos?_sort=matriculados&_order=desc&_limit=${limit}`);
}

