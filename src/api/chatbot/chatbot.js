import request from '@/utils/request'

//测试后台异步处理任务
export function testProcess() {
  return request({
    url: '/AIBot/testAsyncProcess',
    method: 'post'
    })
}

//获取历史消息
export function getHistoryMessage(query) {
  return request({
    url: '/AIBot/getHistoryMessage',
    method: 'get',
    params: query
  })
}

//获取所有历史消息列表
export function getAllHistoryMessage(query) {
  return request({
    url: '/AIBot/getAllHistoryMessage',
    method: 'get',
    params: query
  })
}

//根据redisKey获取一次聊天消息列表
export function getOneHistoryMessage(query) {
  return request({
    url: '/AIBot/getOneHistoryMessage',
    method: 'get',
    params: query
  })
}

//根据redisKey删除一条历史消息
export function deleteOneHistoryMessage(query) {
  return request({
    url: '/AIBot/deleteHistoryMessage',
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

//调用Google Gemini AI的接口,采用对话模式
export function geminiAIChat(data) {
  return request({
    url: '/AIBot/getGeminiChat',
    method: 'post',
    data: data
  })
}

//调用Google Gemini AI的接口,采用对话模式
export function geminiAIWithFile(data) {
  return request({
    url: '/AIBot/getGeminiWithFile',
    method: 'post',
    data: data,
    headers:{'Content-Type': 'multipart/form-data'}
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

//TTS 文字转语音
export function downLoadZip(requestUrl,filename) {
  var url = baseUrl + requestUrl
  axios({
    method: 'get',
    url: url,
    // params:queryParams,
    responseType: 'blob',
    headers: { 'Plus-Token': getToken() }//'Bearer ' + 
  }).then(res => {
    resolveBlob(res, mimeMap.zip)
  })
}
export function getTTSChinese(query) {
  return request({
    url: '/translate/ttsZH_CN',
    method: 'get',
    params: query
  })
}