import axios from "axios";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    /* Authentication Stuff */
  },
});

export { axiosInstance };
