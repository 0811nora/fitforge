import axios from "axios";

const API_URL = import.meta.env.VITE_DATA_API_URL;

export const apiRequest = async (content) => {
  const res = await axios.post(API_URL, content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return res.data;
};

// {
//  action: "register",
//  email: "test@gmail.com",
//  password_hash: "123456",
// },
