import axios from "axios";

const baseURL = "https://dummyjson.com";

export const axiosInstance = axios.create({
  baseURL,
});

export const formatCurrency = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
};
