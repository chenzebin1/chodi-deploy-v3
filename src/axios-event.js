import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-chodi-default-rtdb.firebaseio.com/",
});

export default instance;
