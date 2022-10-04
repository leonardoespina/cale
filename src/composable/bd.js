//import { get } from "../helper/helperBd.js";
//import { ref } from "vue";
import axios from "axios";
let res;

const post = async (payLoad) => {
  const { url, data, token } = payLoad;
  if (!token) {
    res = await axios.post(url, data);
    return res;
  }
};
const token = (payLoad) => {
  let ls = localStorage;
  let parse = JSON.parse(ls.getItem("token", token));
  if (payLoad === null) {
    if (parse) return parse;
    else return false;
  } else {
    const { lastname, firstname, accessToken, tipoUsuario, ruta, menu } =
      payLoad;
    ls.setItem(
      "token",
      JSON.stringify({
        lastname,
        firstname,
        tipoUsuario,
        accessToken,
        ruta,
        menu,
      })
    );
  }
};

export { post, token };
