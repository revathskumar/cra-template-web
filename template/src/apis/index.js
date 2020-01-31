import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    Authorization: "token " + process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json;charset=utf-8"
  }
});

export default instance;
