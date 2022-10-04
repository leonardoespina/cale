///CONTENIDO DEL MENU Y SUS RUTAS
const menuAlumnos = [
  {
    name: "Home",
    icon: "home",
    ruta: "/",
    id: 1,
  },
  {
    name: "Materias",
    icon: "class",
    ruta: "/Estudiantes/Materiales",
    id: 1,
  },
];
const menuAdministrador = [
  {
    name: "Home",
    icon: "home",
    ruta: "/",
    id: 1,
  },
  {
    name: "Cursos",
    icon: "class",
    ruta: "/Administrador/Cursos",
    id: 1,
  },
];

const menuSection = [
  {
    id: 1,
    name: "Login",
    ruta: "/login",
  },
  /*{
    id: 2,
    name: "Salir",
    ruta: "/Salir",
  },*/
];

const tittle = [
  {
    Top: "Centro de Aprendizaje de Lenguas Extranjeras",
    Footer: "C.A.L.E ",
  },
];

const card = [
  {
    id: 1,
    titulo: "Ofrecemos",
    img: "card2.jpg",
    contenido:
      " Una gama de cursos de idiomas y culturales para adultos, niños  adolescentes, empresas y más. El inglés es lenguajes más hablados a nivel mundial",
  },
  {
    id: 2,
    titulo: "Cursos Presenciales - Online",
    img: "card1.png",
    contenido:
      "Inglés online ha tomado mayor relevancia; esto es así sobre todo en el mundo de los negocios, donde se le considera a esta lengua como el lenguaje universal.",
  },
  {
    id: 3,
    titulo: "Cursos Presenciales",
    img: "card3.png",
    contenido:
      "Nuestras clases presenciales te brindan la oportunidad de practicar el idioma de estudio en un entorno de apoyo con la guía y el estímulo.",
  },
];

let menuAll = {
  menuAlumnos,
  menuAdministrador,
};
export { menuSection, tittle, card, menuAll };
