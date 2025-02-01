import type { InternalAxiosRequestConfig } from 'axios';

export function axiosAuthInterceptor(
  inter: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  const token = localStorage.getItem('token') || ''; 
  inter.headers.Authorization = `Bearer ${token}`;
  return inter;
}
