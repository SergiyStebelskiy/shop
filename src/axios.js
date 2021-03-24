import axios from "axios";

const agent = axios.create({
  baseURL: "http://localhost:3001/",
});

export default agent;
