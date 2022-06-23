// Reloj

setInterval(() => {
  let fecha = new Date(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(), //Numero de los dias de domingo a sabado 0-6
    dia = fecha.getDate(), //Numero del dia de la semana 1-31
    mes = fecha.getMonth(), //Numero de meses desde 0 corresponde a Enero
    anio = fecha.getFullYear(),
    //Parrafo Fecha
    fechaReloj = document.getElementById("fecha"),
    //Hora Hora
    horaReloj = document.getElementById("hora");

  let semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ],
    meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

  fechaReloj.innerHTML = `${semana[diaSemana]} ${dia} de ${meses[mes]} del ${anio}`;

  if (segundos < 10) {
    segundos = "0" + segundos;
  } else {
    segundos = segundos;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  } else {
    minutos = minutos;
  }

  if (hora < 10) {
    hora = "0" + hora;
  } else {
    hora = hora;
  }

  horaReloj.innerHTML = `${hora} : ${minutos} : ${segundos}`;
});

// Funciones de botones

let root = document.querySelector(":root");

let changeColorPink = () => {
  root.style.setProperty("--shadow-from-1", "rgba(255, 123, 171, 0.576)");
  root.style.setProperty("--shadow-from-2", "rgba(255, 123, 171, 0.722)");
  root.style.setProperty("--shadow-from-3", "rgba(255, 123, 171, 0.515)");
  root.style.setProperty("--shadow-from-4", "rgba(255, 123, 171, 0.655)");
  root.style.setProperty("--shadow-from-5", "rgba(255, 123, 171, 0.579)");
  root.style.setProperty("--shadow-to-1", "rgba(255, 123, 171, 0.58)");
  root.style.setProperty("--shadow-to-2", "rgba(255, 123, 171, 0.7)");
  root.style.setProperty("--shadow-to-3", "rgba(255, 123, 171, 0.8)");
  root.style.setProperty("--shadow-to-4", "rgb(255, 123, 171, 0.88)");
  root.style.setProperty("--shadow-to-5", "rgb(255, 123, 171, 1)");
};

let changeColorBlue = () => {
  root.style.setProperty("--shadow-from-1", "rgba(123, 172, 255, 0.576)");
  root.style.setProperty("--shadow-from-2", "rgba(123, 172, 255, 0.722)");
  root.style.setProperty("--shadow-from-3", "rgba(123, 172, 255, 0.515)");
  root.style.setProperty("--shadow-from-4", "rgba(123, 172, 255, 0.655)");
  root.style.setProperty("--shadow-from-5", "rgba(123, 172, 255, 0.579)");
  root.style.setProperty("--shadow-to-1", "rgba(123, 172, 255, 0.58)");
  root.style.setProperty("--shadow-to-2", "rgba(123, 172, 255, 0.7)");
  root.style.setProperty("--shadow-to-3", "rgba(123, 172, 255, 0.8)");
  root.style.setProperty("--shadow-to-4", "rgb(123, 172, 255, 0.88)");
  root.style.setProperty("--shadow-to-5", "rgb(123, 172, 255, 1)");
};

let changeColorGreen = () => {
  root.style.setProperty("--shadow-from-1", "rgba(123, 255, 206, 0.576)");
  root.style.setProperty("--shadow-from-2", "rgba(123, 255, 206, 0.722)");
  root.style.setProperty("--shadow-from-3", "rgba(123, 255, 206, 0.515)");
  root.style.setProperty("--shadow-from-4", "rgba(123, 255, 206, 0.655)");
  root.style.setProperty("--shadow-from-5", "rgba(123, 255, 206, 0.579)");
  root.style.setProperty("--shadow-to-1", "rgba(123, 255, 206, 0.58)");
  root.style.setProperty("--shadow-to-2", "rgba(123, 255, 206, 0.7)");
  root.style.setProperty("--shadow-to-3", "rgba(123, 255, 206, 0.8)");
  root.style.setProperty("--shadow-to-4", "rgb(123, 255, 206, 0.88)");
  root.style.setProperty("--shadow-to-5", "rgb(123, 255, 206, 1)");
};
