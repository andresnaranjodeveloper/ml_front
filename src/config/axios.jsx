import axios from "axios";

//* Assigning the base URL for the API consumption
const itemAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

export default itemAxios;
