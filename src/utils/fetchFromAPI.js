import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "3faaddd313msh6b1c51944e15af5p19bd4bjsn2e695fbeab6a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
}; 

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}; 
