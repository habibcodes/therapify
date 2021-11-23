import axios from "axios";
export const getPractitioners = () => {
  // Will eventually use axios... Faking it for now.
  return axios.get("/api/practitioners").then((res) => res.data);

};


