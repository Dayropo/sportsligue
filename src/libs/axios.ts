import axios from "axios"

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_RAPIDAPI_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
