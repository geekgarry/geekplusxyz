import request from '@/utils/request'

//调用chagpt3.5的接口
export function getchatgpt(data) {
    return request({
      url: '/openai/getchatgpt',
      method: 'post',
      data: data
    })
}

//查看聊天记录
export function getchatgpthistory(parm) {
  return request({
    url: '/openai/getHistoryMessage',
    method: 'get',
    params: parm
  })
}

//上传录音文件
export function uploadVoiceBlobFile(formData) {
  return request({
    url: '/openai/uploadVoiceBlob',
    method: 'post',
    data: formData,
    headers:{'Content-Type': 'multipart/form-data'}
  })
}

//调用chagpt3.5的接口，测试版
export function chatgpttest(data) {
    return request({
      url: '/openai/chatgpttest',
      method: 'post',
      data: data
    })
}