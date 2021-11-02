import axios from "axios";
import { baseUrl } from "./Constents/constent";

const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance;