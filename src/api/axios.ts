
import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { production_baseURL, development_baseURL, local_baseURL } from "../config/ApiConfig";




export const service: AxiosInstance = axios.create({
  // 配置對象
  // baseURL: process.env.NODE_ENV === "production" ?
  //   production_baseURL :
  //   process.env.NODE_ENV === "development" ?
  //     development_baseURL :
  //     process.env.NODE_ENV === "local" ? local_baseURL : local_baseURL,
  // timeout: 50 * 1000,
  // headers: {
  //   "Content-Type": "application/json;charset:utf-8",
  // },
});


