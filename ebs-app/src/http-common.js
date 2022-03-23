import axios from "axios";
export default axios.create({
  baseURL: "https://backendebs.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});