// src/custom.d.ts
declare module "axios" {
  export interface AxiosRequestConfig {
    // Add custom Axios request config options if needed
  }

  export interface AxiosResponse<T = any> {
    // Add custom Axios response data types if needed
  }
}
