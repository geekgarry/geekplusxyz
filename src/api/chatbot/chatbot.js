import request from '@/utils/request'

//调用chagpt3.5的接口
export function getchatgpt(data) {
    return request({
      url: '/AIBot/getchatgpt',
      method: 'post',
      data: data
    })
}

//调用chagpt3.5的接口，测试版
export function chatgpttest(data) {
    return request({
      url: '/AIBot/chatgpttest',
      method: 'post',
      data: data
    })
}

//调用Google Gemini AI的接口
export function getHistoryMessage(query) {
  return request({
    url: '/AIBot/getHistoryMessage',
    method: 'get',
    params: query
  })
}

//调用Google Gemini AI的接口
export function geminiAI(data) {
  return request({
    url: '/AIBot/getGeminiContent',
    method: 'post',
    data: data
  })
}

//上传录音文件
export function uploadVoiceBlob(data) {
  return request({
    url: '/AIBot/uploadVoiceBlob',
    method: 'post',
    data: data,
    headers:{'Content-Type': 'multipart/form-data'}
  })
}