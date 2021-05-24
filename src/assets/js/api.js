import { get, post } from "@/assets/js/axios";

export function login(data) {
  return post("/login", data);
}