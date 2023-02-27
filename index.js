// js del boton de hamburguesa

const iconoMenu = document.querySelector("#iconoMenu"),
      menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) =>{
    menu.classList.toggle("activo");
})

// js del carrusel de fotos de los trabajos de Mia

const carruselDeTrabajos = document.querySelector("#carruselDeTrabajos");
var trabajo = document.querySelectorAll(".trabajo");
var ultimoTrabajo = trabajo[trabajo.length-1];

const botonIzquierda = document.querySelector("#botonIzquierda");
const botonDerecha = document.querySelector("#botonDerecha");

carruselDeTrabajos.insertAdjacentElement("afterbegin", ultimoTrabajo);

function siguienteTrabajo(){
    var primerTrabajo = document.querySelectorAll(".trabajo")[0];
    carruselDeTrabajos.style.marginLeft = "-200%";
    carruselDeTrabajos.style.transition = "all 0.5s";
    setTimeout(function() {
        carruselDeTrabajos.style.transition = "none";
        carruselDeTrabajos.insertAdjacentElement("beforeend", primerTrabajo);
        carruselDeTrabajos.style.marginLeft = "-100%";
    }, 500);
}

function anteriorTrabajo(){
    var trabajo = document.querySelectorAll(".trabajo");
    var ultimoTrabajo = trabajo[trabajo.length-1];  
    carruselDeTrabajos.style.marginLeft = "0%";
    carruselDeTrabajos.style.transition = "all 0.5s";
    setTimeout(function() {
        carruselDeTrabajos.style.transition = "none";
        carruselDeTrabajos.insertAdjacentElement("afterbegin", ultimoTrabajo);
        carruselDeTrabajos.style.marginLeft = "-100%";
    }, 500);
}

botonDerecha.addEventListener("click", function(){
    siguienteTrabajo();
});

botonIzquierda.addEventListener("click", function(){
    anteriorTrabajo();
});