import axios from "axios";
import Cookie from "js-cookie";
import { MessageBox, Message } from 'element-ui'

import router from '@/router'

const baseURL = 'http://localhost:3000'
const devbaseURL = ''

// //axios对象
// const http=axios.create({
//     baseURL:devbaseURL,
//     timeout:10000,
// })

// //请求拦截器
// http.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     const token=Cookie.get('token')
//     if(token){
//         config.headers.Authorization ="Bearer "+token
//     }
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   })

// //响应拦截器
// http.interceptors.response.use(function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么

//     // return Promise.reject(error);

//     return response;
//   }, function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });

function createHttpObject(httpsets = {
  baseURL: devbaseURL,
  timeout: 10000,
}) {
  //axios对象
  const http = axios.create(httpsets)

  //请求拦截器
  http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = Cookie.get('token')
    if (token) {
      config.headers.Authorization = "Bearer " + token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })

  //响应拦截器基础版
  // http.interceptors.response.use(function (response) {
  //   // 2xx 范围内的状态码都会触发该函数。
  //   // 对响应数据做点什么

  //   // return Promise.reject(error);

  //   return response;
  // }, function (error) {
  //   // 超出 2xx 范围的状态码都会触发该函数。
  //   // 对响应错误做点什么
  //   return Promise.reject(error);
  // });

  //响应拦截器，显示报错信息
  http.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      // const res = response.data

      // if the custom code is not 20000, it is judged as an error.
      // if (res.code !== 200) {
      //   Message({
      //     message: res.message || 'Error',
      //     type: 'error',
      //     duration: 5 * 1000
      //   })

      //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //     // to re-login
      //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //       confirmButtonText: 'Re-Login',
      //       cancelButtonText: 'Cancel',
      //       type: 'warning'
      //     }).then(() => {
      //       store.dispatch('user/resetToken').then(() => {
      //         location.reload()
      //       })
      //     })
      //   }
      //   return Promise.reject(new Error(res.message || 'Error'))
      // } else {
      //   return res
      // }
      return response
    },
    error => {
      console.log('err' + error) // for debug
      Message({
        showClose: true,
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      // router.push({
      //   name: "login",
      // });
      return Promise.reject(error)
    }
  )

  return http;
}

export const KellyServer = createHttpObject({
  baseURL: '/KellyServer',
  timeout: 10000,
})

export const MockServer = createHttpObject()

export const LucasServer = createHttpObject({
  baseURL: '/LucasServer',
  timeout: 10000,
})

// export default KellyServer