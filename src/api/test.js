import request from '@/utils/request'

//获取远程地址
export function getcMaike() {
    return request({
      url: '/captchaImage',
      method: 'get',
    })
}