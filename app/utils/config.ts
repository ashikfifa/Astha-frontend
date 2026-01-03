// Allow overriding via env; default keeps your prior value
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin.aasthabd.com/api";

export const ENDPOINTS = {
  development: `${API_BASE_URL}/development`,
  construction: `${API_BASE_URL}/construction`,
  interior: `${API_BASE_URL}/interior`,
};
