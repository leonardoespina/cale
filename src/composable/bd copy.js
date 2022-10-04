//import { get } from "../helper/helperBd.js";
//import { ref } from "vue";
import axios from "axios";
let res;
const operation = () => {
  const post = async (payLoad) => {
    const { url, data, token } = payLoad;
    if (!token) {
      res = await axios.post(url, data);
      return res;
    }
  };
  return { post, res };
};

export default operation;
