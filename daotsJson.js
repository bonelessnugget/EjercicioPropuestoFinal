// Replace ./data.json with your JSON feed
fetch('./prediccionesZaragoza.json')
  .then((response) => {
    return response.json()
  })
  .then((datos) => {
      for (let dato of datos) {
        console.log(dato);
      }
    viento1 = datos[0].prediccion.dia[0].viento;
    precipitacion1 = datos[0].prediccion.dia[0].probPrecipitacion;
    document.getElementById("dia1").addEventListener("click", function(){
        for (var i = 0; i<datos.length; i++){
            document.getElementById("txt-temperatura").innerHTML = (datos[i].prediccion.dia[0].temperatura.maxima + datos[i].prediccion.dia[0].temperatura.minima) / 2 + " º";
            mediaViento = 0;
          for (let j = 0; j<viento1.length; j++){
            mediaViento += viento1[j].velocidad;
          }
            mediaViento /= 7;
            document.getElementById("viento-txt").innerHTML = Math.trunc(mediaViento) + " km/h";
            mediaPrec = 0;
          for (let prob = 0; prob<precipitacion1.length; prob++){
            mediaPrec += precipitacion1[prob].value;
          }
          mediaPrec /= precipitacion1.length;
            document.getElementById("precipitacion-txt").innerHTML = Math.trunc(mediaPrec) + " %";
        }
    });
    

  })
  .catch((err) => {
    // Do something for an error here
  })

function abrirCalendario(){
    var modal = document.getElementById("calendario-popup");
    var btn = document.getElementById("calendario");
    btn.onclick = function() {
        modal.style.display = "block";
        modal.style.alignSelf = "center";
        modal.style.zIndex = 1000;
        modal.style.position = "absolute";
        modal.style.width = "40%";
    }
}

function cerrarCalendario(){
    var modal = document.getElementById("calendario-popup");
    modal.style.display = "none";
}