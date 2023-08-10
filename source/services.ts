import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.clarifai.com",
  headers: {
    Authorization: `Key ${process.env.EXPO_PUBLIC_CLARIFAI_API_KEY}`
  }
})