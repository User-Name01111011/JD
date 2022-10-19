import { request } from "@/network/request"

export function getSpec(){
  return request({
    url: '/home/spec.php'
  })
}

export function getChannels(){
  return request({
    url: '/home/channels.php'
  })
}

export function getRecommend(){
  return request({
    url: '/home/recommend.php'
  })
}

export function getRecommendOther(index){
  return request({
    url: '/home/recommendOther.php',
    params: {
      index
    }
  })
}

export function getAddRecommend(){
  return request({
    url: '/home/addRecommend.php'
  })
}

export function getSimilarRecommend(id){
  return request({
    url: '/home/recommendSimilar.php',
    params: {
      id
    }
  })
}

export function getReplaceRecommend(){
  return request({
    url: '/home/replace.php'
  })
}