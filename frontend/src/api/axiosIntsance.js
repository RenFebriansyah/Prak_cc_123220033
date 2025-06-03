// src/api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://be-notes-33-296685597625.us-central1.run.app",
  withCredentials: true, // untuk kirim cookie kalau dibutuhkan
});

export default instance;