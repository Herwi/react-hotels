import axios from "axios";
import { API_URL } from "../config.json";

const apiClient = () => {
  return axios.create({
    baseURL: API_URL,
    responseType: "json",
  });
};

export default apiClient;
