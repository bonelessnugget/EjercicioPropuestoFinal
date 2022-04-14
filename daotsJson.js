// Replace ./data.json with your JSON feed
fetch('./prediccionesZaragoza.json')
  .then((response) => {
    return response.json()
  })
  .then((datos) => {
      for (let dato of datos) {
        console.log(dato);
      }
    document.getElementById("dia1").addEventListener("click", function(){
      prueba = document.getElementById("pruebaSVG");
       prueba.src = "./imagenes/a_2_little_sunny.svg";
        for (var i = 0; i<datos.length; i++){
            document.getElementById("txt-temperatura").innerHTML = (datos[i].prediccion.dia[0].temperatura.maxima + datos[i].prediccion.dia[0].temperatura.minima) / 2 + " º";

        }

        for (var i = 0; i<datos.viento.length; i++){
            console.log(datos[i].prediccion.dia[0].viento[i].velocidad);
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