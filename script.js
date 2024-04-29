let nombre = document.getElementById("input1");
let cont_nom = document.getElementById("cont-nombre");
let btn1 = document.getElementById("btn1");



btn1.addEventListener("click", function(){
    cont_nom.innerHTML = nombre.value;

})


//Barra dspelegable
const iconoMenu = document.querySelector("#icono-menu"),
    menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", function(e){
    //Alternamos estilos para el menu y body
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");

    //Altenamos su aributo "src para el icono del menu"
    const rutaActual = e.target.getAttribute("src");

    if (rutaActual == "/Javier/img/editar.png") {
        e.target.setAttribute("src","/Javier/img2/editar.png")
    }else{
        e.target.setAttribute("src","/Javier/img/editar.png")
    }
})
