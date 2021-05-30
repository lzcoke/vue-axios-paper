import request from "@/assets/js/Request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data
  });
}
