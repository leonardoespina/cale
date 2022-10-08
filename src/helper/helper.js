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
    name: "Registrar Curso",
    icon: "edit",
    ruta: "/Administrador/Cursos",
    id: 2,
  },
  {
    name: "Registrar Modulos",
    icon: "view_module",
    ruta: "/Administrador/Modulos",
    id: 3,
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
let myLocale = {
  /* starting with Sunday */
  days: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
  daysShort: "Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
  monthsShort: "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
  firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
  format24h: true,
  pluralDay: "dias",
};
let tipoCurso = [
  {
    label: "Diplomado",
    value: "diplomado",
  },
  {
    label: "Curso Normal",
    value: "curso",
  },
];
export { menuSection, tittle, card, menuAll, myLocale, tipoCurso };
