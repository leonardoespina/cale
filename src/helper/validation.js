import { ref } from "vue";

//import { useStore } from "vuex";

//let store = useStore();

export const required = (val) => {
  if (val) {
    console.log(typeof val);
    if (typeof val == "number") {
      return (val && val > 0) || "Requerido *";
    }
    if (typeof val == "object") {
      return (val && Object.keys(val).length > 0) || "Objeto *";
    }

    return (val && val.length > 0) || "Requerido *";
  }
};

export const requeridLetter = (val) => {
  if (val != null) {
    const regExp =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1 \t\r\n\f]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1 \t\r\n\f]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 \t\r\n\f]+$/g;
    return (val && regExp.test(val)) || "Solo letras ";
  }
};

export const messages = (message, color, icon, typo) => {
  let msg = {
    color: color,
    icon: icon,
    position: "top",
  };

  if (typo === "normal") {
    Object.assign(msg, { message: message });
    return msg;
  }
  if (typo === "store") {
    //   let msgNormal = {};
    //  let actions = [];

    Object.assign(msg, {
      actions: [
        {
          label: "Si",
          color: "white",
          handler: () => {
            //     store.dispatch("action", message);
          },
        },
        {
          label: "No",
          color: "white",
          handler: () => {
            console.log("cancelarr");
            /* ... */
          },
        },
      ],
    });

    return msg;
  }
  /*




*/
};

export const filterFnActividad = (val, update, selectParroquia) => {
  const vector = ref([]);
  update(() => {
    const needle = val.toLowerCase();

    vector.value = selectParroquia.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
  return vector;
};
