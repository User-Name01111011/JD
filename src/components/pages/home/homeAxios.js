import { request } from "@/network/request"

export function getSpec(){
  return request({
    url: '/home/spec'
  })
}

export function getChannels(){
  return request({
    url: '/home/channels'
  })
}