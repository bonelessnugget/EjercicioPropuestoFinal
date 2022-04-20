

function verCalendario(){
  var calendario = document.getElementById("calendario");
  calendario.style.display = "flex";
  calendario.style.flexDirection = "column";
  calendario.style.alignItems = "center";
  calendario.style.justifyContent = "center";
  calendario.style.textAlign = "center";
}

document.getElementById("dia1").onmousedown = function(){
  json(0, document.getElementById("dia1"));
  document.getElementById("fechas1").innerHTML = "Hoy, 1 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 2 Abril";
  document.getElementById("fechas3").innerHTML = "3 / Abril";
}
document.getElementById("dia1").onmouseup = function(){
  cerrarCalendario()
}
document.getElementById("dia2").onmousedown = function (){
  json(1, document.getElementById("dia2"));
  document.getElementById("fechas1").innerHTML = "Hoy, 2 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 3 Abril";
  document.getElementById("fechas3").innerHTML = "4 / Abril";
}
document.getElementById("dia2").onmouseup = function(){
  cerrarCalendario()
}
document.getElementById("dia3").onmousedown = function (){
  json(2, document.getElementById("dia3"));
  document.getElementById("fechas1").innerHTML = "Hoy, 3 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 4 Abril";
  document.getElementById("fechas3").innerHTML = "5 / Abril";
}
document.getElementById("dia3").onmouseup = function(){
  cerrarCalendario()
}
document.getElementById("dia4").onmousedown = function (){
  json(3, document.getElementById("dia4"));
  document.getElementById("fechas1").innerHTML = "Hoy, 4 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 5 Abril";
  document.getElementById("fechas3").innerHTML = "6 / Abril";
}
document.getElementById("dia4").onmouseup = function(){
  cerrarCalendario()
}
document.getElementById("dia5").onmousedown = function (){
  json(4, document.getElementById("dia5"));
  document.getElementById("fechas1").innerHTML = "Hoy, 5 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 6 Abril";
  document.getElementById("fechas3").innerHTML = "7 / Abril";
}
document.getElementById("dia5").onmouseup = function(){
  cerrarCalendario()
}
document.getElementById("dia6").onmousedown = function (){
  json(3, document.getElementById("dia6"));
  document.getElementById("fechas1").innerHTML = "Hoy, 6 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 7 Abril";
  document.getElementById("fechas3").innerHTML = "8 / Abril";
}
document.getElementById("dia6").onmouseup = function(){
  cerrarCalendario()
}
document.getElementById("dia7").onmousedown = function (){
  json(4, document.getElementById("dia7"));
  document.getElementById("fechas1").innerHTML = "Hoy, 7 Abril";
  document.getElementById("fechas2").innerHTML = "Mañana, 8 Abril";
  document.getElementById("fechas3").innerHTML = "9 / Abril";
}
document.getElementById("dia7").onmouseup = function(){
  cerrarCalendario()
}

function json(argumentoA, argumentoB) {
  fetch('./prediccionesZaragoza.json')
    .then((response) => {
      return response.json()
    })
    .then((datos) => {
      for (let i = 0; i<datos.length; i++){
        console.log(datos[i])
      }
      argumentoB.addEventListener("click", function () {
        viento1 = datos[0].prediccion.dia[argumentoA].viento;
        precipitacion1 = datos[0].prediccion.dia[argumentoA].probPrecipitacion;
        estadoCielo = datos[0].prediccion.dia[argumentoA].estadoCielo;
        estadoCieloFinal = [];
        var aleatorio = Math.floor(Math.random() * (estadoCieloFinal.length - 0) + 0);
        for (let i = 0; i < estadoCielo.length; i++) {
          if (estadoCielo[i].descripcion != '') {
            estadoCieloFinal.push(estadoCielo[i]);
          }
        }
        if (estadoCieloFinal[aleatorio].descripcion === 'Cubierto') {
          document.getElementById("svgTiempo").src = "./imagenes/b_2_cloudy.svg";
          document.getElementById("icono1SVG").src = "./imagenes/b_2_cloudy.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(185,185,185,1) 0%, rgba(159,159,159,1) 90%, rgba(112,112,112,1) 100%)";
        }else if (estadoCieloFinal[aleatorio].descripcion === 'Muy nubos'){
          document.getElementById("svgTiempo").src = "./imagenes/b_3_very_cloudy.svg";
          document.getElementById("icono1SVG").src = "./imagenes/b_3_very_cloudy.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(149,149,149,1) 0%, rgba(125,125,125,1) 90%, rgba(92,92,92,1) 100%)";
        }else if (estadoCieloFinal[aleatorio].descripcion === 'Intervalos nubosos con lluvia escasa'){
          document.getElementById("svgTiempo").src = "./imagenes/c_1_rainy.svg";
          document.getElementById("icono1SVG").src = "./imagenes/c_1_rainy.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(149,149,149,1) 0%, rgba(125,125,125,1) 90%, rgba(92,92,92,1) 100%)";
        }else if (estadoCieloFinal[aleatorio].descripcion === 'Cubierto con lluvia'){
          document.getElementById("svgTiempo").src = "./imagenes/c_2_heavy_rain.svg";
          document.getElementById("icono1SVG").src = "./imagenes/c_2_heavy_rain.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(149,149,149,1) 0%, rgba(125,125,125,1) 90%, rgba(92,92,92,1) 100%)";
        }else if (estadoCieloFinal[aleatorio].descripcion === 'Despejado'){
          document.getElementById("svgTiempo").src = "./imagenes/a_2_little_sunny.svg";
          document.getElementById("icono1SVG").src = "./imagenes/a_2_little_sunny.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(0,138,255,1) 0%, rgba(100,184,255,1) 90%, rgba(160,211,255,1) 100%)";
        }else if (estadoCieloFinal[aleatorio].descripcion === 'Intervalos nubosos'){
          document.getElementById("svgTiempo").src = "./imagenes/b_1_partly_cloudy.svg";
          document.getElementById("icono1SVG").src = "./imagenes/b_1_partly_cloudy.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(185,185,185,1) 0%, rgba(159,159,159,1) 90%, rgba(112,112,112,1) 100%)";
        }else if (estadoCieloFinal[aleatorio].descripcion === "Nubes altas"){
          document.getElementById("svgTiempo").src = "./imagenes/b_2_cloudy.svg";
          document.getElementById("icono1SVG").src = "./imagenes/b_2_cloudy.svg";
          document.getElementById("principal").style.background = "linear-gradient(180deg, rgba(185,185,185,1) 0%, rgba(159,159,159,1) 90%, rgba(112,112,112,1) 100%)";
        }
        document.getElementById("text-informativo").innerHTML = estadoCieloFinal[aleatorio].descripcion;
        for (var i = 0; i < datos.length; i++) {
          document.getElementById("txt-temperatura").innerHTML = (datos[i].prediccion.dia[argumentoA].temperatura.maxima + datos[i].prediccion.dia[argumentoA].temperatura.minima) / 2 + " º";

          mediaViento = 0;
          for (let j = 0; j < viento1.length; j++) {
            mediaViento += viento1[j].velocidad;
          }
          mediaViento /= 7;
          document.getElementById("viento-txt").innerHTML = Math.trunc(mediaViento) + " km/h";
          mediaPrec = 0;
          for (let prob = 0; prob < precipitacion1.length; prob++) {
            mediaPrec += precipitacion1[prob].value;
          }
          mediaPrec /= precipitacion1.length;
          document.getElementById("precipitacion-txt").innerHTML = Math.trunc(mediaPrec) + " %";
        }
        var argumentofuturo = (argumentoA + 1);
        var argumentomasfuturo = (argumentoA + 2);
        document.getElementById("temp1").innerHTML = (datos[0].prediccion.dia[argumentoA].temperatura.maxima + datos[0].prediccion.dia[argumentoA].temperatura.minima) / 2 + " º";
        document.getElementById("temp2").innerHTML = (datos[0].prediccion.dia[argumentofuturo].temperatura.maxima + datos[0].prediccion.dia[argumentofuturo].temperatura.minima) / 2 + " º";
        document.getElementById("temp3").innerHTML = (datos[0].prediccion.dia[argumentomasfuturo].temperatura.maxima + datos[0].prediccion.dia[argumentomasfuturo].temperatura.minima) / 2 + " º";
        var aleatorioHoras = Math.floor(Math.random() * 24);
        document.getElementById("hora1").innerHTML = aleatorioHoras + ":00AM";
        document.getElementById("hora2").innerHTML = aleatorioHoras + 1 + ":00AM";
        document.getElementById("hora3").innerHTML = aleatorioHoras + 2 + ":00AM";
        let icono2SVG = document.getElementById("icono2SVG");
            if (estadoCieloFinal[aleatorio].descripcion === 'Cubierto'){
              icono2SVG.src = "./imagenes/b_1_partly_cloudy.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion.descripcion === 'Muy nubos'){
              icono2SVG.src = "./imagenes/b_2_very_cloudy.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion.descripcion === 'Intervalos nubosos con lluvia escasa'){
              icono2SVG.src = "./imagenes/c_1_rainy.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion.descripcion === 'Cubierto con lluvia'){
              icono2SVG.src = "./imagenes/c_2_heavy_rain.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion.descripcion === 'Despejado'){
              icono2SVG.src = "./imagenes/a_2_little_sunny.svg";
            }
          
        
        let icono3SVG = document.getElementById("icono3SVG");
            if (estadoCieloFinal[aleatorio].descripcion === 'Cubierto'){
              icono3SVG.src = "./imagenes/b_1_partly_cloudy.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion === 'Muy nubos'){
              icono3SVG.src = "./imagenes/b_2_very_cloudy.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion === 'Intervalos nubosos con lluvia escasa'){
              icono3SVG.src = "./imagenes/c_1_rainy.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion === 'Cubierto con lluvia'){
              icono3SVG.src = "./imagenes/c_2_heavy_rain.svg";
            }else if (estadoCieloFinal[aleatorio].descripcion === 'Despejado'){
              icono3SVG.src = "./imagenes/a_2_little_sunny.svg";
            }
      });
    })
    .catch((err) => {
      // Do something for an error here
    });
}
function cerrarCalendario(){
document.getElementById("calendario").style.display = "none";
}