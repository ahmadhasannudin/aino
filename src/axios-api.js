import axios from "axios";

const getAPI = axios.create({
  baseURL: "https://private-anon-197575e71e-retailmockapp.apiary-mock.com",
  timeout: 5000,
});

export { getAPI };
