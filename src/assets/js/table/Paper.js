import request from "@/assets/js/Request";

export function getPaperPage(params) {
  return request({
    url: "/paper",
    method: "get",
    params
  });
}

export function paperCollect(data) {
  return request({
    url: "/collect",
    method: "post",
    data
  });
}

export function paperCancelCollect(params) {
  return request({
    url: "/collect",
    method: "delete",
    params
  });
}

export function paperCollectPage(params) {
  return request({
    url: "/collect",
    method: "get",
    params
  });
}


export function paperViewpage(params) {
  return request({
    url: "/view",
    method: "get",
    params
  });
}

export function paperView(data) {
  return request({
    url: "/view",
    method: "post",
    data
  });
}
