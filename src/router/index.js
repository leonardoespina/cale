import { createRouter, createWebHistory } from "vue-router";

import home from "../views/home";
import login from "../views/login";
import estudiantes from "../views/estudiantes/index";
import administrador from "../views/administrador/index";
import { token } from "../composable/bd.js";

function guardMyroute(to, from, next) {
  let sessionStorage = token(null);

  console.log(to.name);

  if (to.name === "login") {
    if (!sessionStorage) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    if (sessionStorage) {
      let { tipoUsuario } = sessionStorage;

      if (to.name === tipoUsuario) {
        if (to.meta.auth === true) {
          if (sessionStorage) {
            next();
          } else {
            next({ name: "login" });
          }
        } else {
          next();
        }
      } else {
        next({ name: "home" });
      }
    } else {
      next({ name: "home" });
    }
  }
}
/** inicio del router */
const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
    beforeEnter: guardMyroute,
  },
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    name: "found",
    path: "/:pathMatch(.*)*",
    component: () => import("../views/Found.vue"),
  },
  /* children: [
      {
        path: "/Estudiantes",
        name: "estudiantes",
        //  beforeEnter: guardMyroute,
        component: () => import("../views/estudiantes/index"),
      },
    ],*/
  /** estudiantes */
  {
    path: "/Estudiantes",
    name: "estudiante",

    beforeEnter: guardMyroute,
    meta: {
      auth: true,
    },
    component: estudiantes,
    children: [
      {
        path: "/Estudiantes/Materiales",
        name: "estudiante",
        beforeEnter: guardMyroute,
        component: () => import("../components/estudiantes/materiales.vue"),
      },
    ],
  },
  /** administrador */
  {
    path: "/Administrador",
    name: "administrador",

    beforeEnter: guardMyroute,
    meta: {
      auth: true,
    },
    component: administrador,
    children: [
      {
        path: "/Administrador/Cursos",
        name: "administrador",
        beforeEnter: guardMyroute,
        component: () => import("../components/administrador/cursos.vue"),
      },
    ],
  },
  /** Profesor */
  {
    path: "/Profesor",
    name: "profesor",
    beforeEnter: guardMyroute,
    meta: {
      auth: true,
    },
    component: () => import("../views/Found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
