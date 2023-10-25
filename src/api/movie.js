import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "df46fec13ee31fafb6986eaf8935ab68",
    language: "ko-KR",
  },
});

export default axiosInstance;
