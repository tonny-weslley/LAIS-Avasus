import http from "../http-common";

export async function getAll() {
  return http.get("/transparecia");
}