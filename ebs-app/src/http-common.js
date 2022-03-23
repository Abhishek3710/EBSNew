import axios from "axios";
export default axios.create({
  baseURL: "https://backendebs1.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});