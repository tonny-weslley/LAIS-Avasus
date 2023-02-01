import http from "../http-common";

export async function getAll() {
  return http.get("/cursos");
}

export async function get(id: any) {
  return http.get(`/cursos/${id}`);
}

export async function getFeatured(limit: number) {
  return http.get(`/cursos?_sort=matriculados&_order=desc&_limit=${limit}`);
}

export async function getAvaliados(limit: number) {
  return http.get(`/cursos?_sort=avaliacao&_order=desc&_limit=${limit}`);
}

export async function getRecentes(limit: number) {
  return http.get(`/cursos?_sort=criado_em&_order=desc&_limit=${limit}`);
}

export async function getByCategory(category: string, limit: number, page:number) {
  return http.get(`/cursos?cateroria=${category}&_sort=nome&_order=asc&_limit=${limit}&_page=${page}`);
}