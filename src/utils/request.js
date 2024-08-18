import axios from 'axios'
import Vue from "vue"
import Toasted from 'vue-toasted';
import router from '../router'
Vue.use(Toasted,Option);

//axios.defaults.headers['Access-Control-Allow-Origin']='*';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const service = axios.create({
    timeout: 30000, // 超过11秒提示超时
    baseURL: process.env.VUE_APP_BASE_API
})
//const service = axios.
// 请求拦截器
service.interceptors.request.use(
    config => {
        // if(localStorage.token) {
        //     config.headers.token = localStorage.token;
        // }
        // return config;
        // if(config && config.headers){
        //     config.headers['Content-Type'] = 'application/json;charset=utf-8';
        // }
        // config.headers['token'] = user.token;  // 设置请求头
        return config
    },
    error => {
        console.log(error);
        Vue.toasted.error("请求服务超时或服务器错误！",{
            position: "top-left",
            duration: 3000,
        });
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 接收后台参数状态
        const res = response.data || {};
        const status=response.status;//网络请求状态
        if(status == 200){
            // 如果是返回的文件
            if (res instanceof Blob) {
                return Promise.resolve(res);
            }
            // 兼容服务端返回的字符串数据
            if(res.code == 20000 ||res.code== 10000 || res.code==200 || res.data || res.ErrorCode == 20000) {
                return res;
            }else {
                let message = (res.error && res.error.message) || res.message || res.msg || res || '未知错误';
                
                // Vue.toasted.error(message,{
                //     position: "top-center",
                //     duration: 3000,
                //     theme: 'bubble'
                // });

                console.log('拦截器打印错误:', response.data);
                
                //这里可以设置后台返回状态码是500或者是其他,然后重定向跳转
                if(res.code == 500) {
                    // router.push('/login')
                    Vue.toasted.error(res.msg,{
                        position: "top-center",
                        duration: 3000,
                        theme: 'bubble'
                    });
                }
                return Promise.reject(
                    new Error(res.message || (res.error &&res.error.message) || '未知错误')
                );
            }
        }else{
            let message = (response.error && response.error.message) || response.message || res.msg || '未知错误';
            
            Vue.toasted.error(message,{
                position: "top-center",
                duration: 3000,
                theme:'bubble'
            });

            console.log('拦截器打印错误:', response);
            return Promise.reject(
                new Error(response.msg || (response.error &&response.error.message) || '未知错误')
            );
        }
    },
    error => {
        console.log('服务器错误信息:', error);
        if(error.response) {
            // error.response有错误信息,是接口错误,不是取消请求
            // 获取错误码,弹出提示信息,reject()
            let code = error.response.status;
            if(code == 401) {
                // router.push('/login');
                return Promise.reject(
                    new Error('登录过期,请重新登录')
                );
            }
            Vue.toasted.error('服务器繁忙, 请稍后再试!  ' + code,
            {
                position: "top-center",
                duration: 4000,
                theme:'bubble'
            });
            return Promise.reject(error.message);
        }else {
            // 是取消请求
            // 直接reject
            return Promise.reject(error.message);
        }
    }
)
export default service;