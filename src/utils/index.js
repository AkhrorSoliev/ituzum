import axios from "axios";

const baseURL = "https://dummyjson.com/products";

export const axiosInstance = axios.create({
  baseURL,
});
