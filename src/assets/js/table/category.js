import request from "@/assets/js/Request";

export function categoryFirst(params) {
  return request({
    url: "/c_first",
    method: "get",
    params
  });
}

export function categorySecond(params) {
  return request({
    url: "/c_second",
    method: "get",
    params
  });
}


export function categoryThree(params) {
  return request({
    url: "/c_three",
    method: "get",
    params
  });
}

export function categoryFour(params) {
  return request({
    url: "/c_four",
    method: "get",
    params
  });
}
