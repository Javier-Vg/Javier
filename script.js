let nombre = document.getElementById("input1");
let cont_nom = document.getElementById("cont-nombre");

let maestria = document.getElementById("input2");
let cont_maestria = document.getElementById("cont-maestria");

let correo = document.getElementById("input3");
let cont_correo = document.getElementById("cont-correo");

let telefono = document.getElementById("input4");
let cont_telefono = document.getElementById("cont-telefono");

let direccion = document.getElementById("input5");
let cont_direccion = document.getElementById("cont-direccion");
//---------------------------------------
let e_1 = document.getElementById("input6");
let cont_e1 = document.getElementById("cont-e1");

let e_2 = document.getElementById("input7");
let cont_e2 = document.getElementById("cont-e2");

let e_3 = document.getElementById("input8");
let cont_e3 = document.getElementById("cont-e3");

let e_4 = document.getElementById("input9");
let cont_e4 = document.getElementById("cont-e4");

let e_5 = document.getElementById("input10");
let cont_e5 = document.getElementById("cont-e5");

let e_6 = document.getElementById("input11");
let cont_e6 = document.getElementById("cont-e6");

let e_7 = document.getElementById("input12");
let cont_e7 = document.getElementById("cont-e7");

let e_8 = document.getElementById("input13");
let cont_e8 = document.getElementById("cont-e8");

//---------------------------------------------------------

let c_e_1 = document.getElementById("input14");
let cont_c_e_1 = document.getElementById("cont-c1");

let c_e_2 = document.getElementById("input15");
let cont_c_e_2 = document.getElementById("cont-c2");

let c_e_3 = document.getElementById("input16");
let cont_c_e_3 = document.getElementById("cont-c3");

let c_e_4 = document.getElementById("input17");
let cont_c_e_4 = document.getElementById("cont-c4");

//-----------------------------------------------------------

let labor_1 = document.getElementById("input18");
let cont_labor1 = document.getElementById("cont-l1");

let labor_2 = document.getElementById("input19");
let cont_labor2 = document.getElementById("cont-l2");

let labor_3 = document.getElementById("input20");
let cont_labor3 = document.getElementById("cont-l3");

let labor_4 = document.getElementById("input21");
let cont_labor4 = document.getElementById("cont-l4");


let labor_5 = document.getElementById("input22");
let cont_labor5 = document.getElementById("cont-l5");

let labor_6 = document.getElementById("input23");
let cont_labor6 = document.getElementById("cont-l6");

let labor_7 = document.getElementById("input24");
let cont_labor7 = document.getElementById("cont-l7");

let labor_8 = document.getElementById("input25");
let cont_labor8 = document.getElementById("cont-l8");

let labor_9 = document.getElementById("input26");
let cont_labor9 = document.getElementById("cont-l9");

let labor_10 = document.getElementById("input27");
let cont_labor10 = document.getElementById("cont-l10");

let labor_11 = document.getElementById("input28");
let cont_labor11 = document.getElementById("cont-l11");

let labor_12 = document.getElementById("input29");
let cont_labor12 = document.getElementById("cont-l12");

//SKILLS
let hab1 = document.getElementById("input30");
let rango1 = document.querySelector(".input31");
let cont_text1 = document.getElementById("cont-hab1");
let cont_bola1 = document.getElementById("cont-bola1");

let hab2 = document.getElementById("input32");
let rango2 = document.querySelector(".input33");
let cont_text2 = document.getElementById("cont-hab2");
let cont_bola2 = document.getElementById("cont-bola2");

let hab3 = document.getElementById("input34");
let rango3 = document.querySelector(".input35");
let cont_text3 = document.getElementById("cont-hab3");
let cont_bola3 = document.getElementById("cont-bola3");

let hab4 = document.getElementById("input36");
let rango4 = document.querySelector(".input37");
let cont_text4 = document.getElementById("cont-hab4");
let cont_bola4 = document.getElementById("cont-bola4");


let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){

    cont_nom.innerHTML = nombre.value;
    cont_maestria.innerHTML = maestria.value;
    cont_correo.innerHTML = correo.value;
    cont_telefono.innerHTML = telefono.value;
    cont_direccion.innerHTML = direccion.value;
    cont_e1.innerHTML = e_1.value;
    cont_e2.innerHTML = e_2.value;
    cont_e3.innerHTML = e_3.value;
    cont_e4.innerHTML = e_4.value;
    cont_e5.innerHTML = e_5.value;
    cont_e6.innerHTML = e_6.value;
    cont_e7.innerHTML = e_7.value;
    cont_e8.innerHTML = e_8.value;
    cont_c_e_1.innerHTML = c_e_1.value;
    cont_c_e_2.innerHTML = c_e_2.value;
    cont_c_e_3.innerHTML = c_e_3.value;
    cont_c_e_4.innerHTML = c_e_4.value;
    cont_labor1.innerHTML = labor_1.value;
    cont_labor2.innerHTML = labor_2.value;
    cont_labor3.innerHTML = labor_3.value;
    cont_labor4.innerHTML = labor_4.value;
    cont_labor5.innerHTML = labor_5.value;
    cont_labor6.innerHTML = labor_6.value;
    cont_labor7.innerHTML = labor_7.value;
    cont_labor8.innerHTML = labor_8.value;
    cont_labor9.innerHTML =  labor_9.value;
    cont_labor10.innerHTML =  labor_10.value;
    cont_labor11.innerHTML = labor_11.value;
    cont_labor12.innerHTML = labor_12.value;

    cont_text1.innerHTML = hab1.value;
    cont_text2.innerHTML = hab2.value;
    cont_text3.innerHTML = hab3.value;
    cont_text4.innerHTML = hab4.value;


    //Elimina los iconos circulo para luego agregar nuevos.
    document.getElementById("contenedorsito1").remove();
    document.getElementById("contenedorsito2").remove();
    document.getElementById("contenedorsito3").remove();
    document.getElementById("contenedorsito4").remove();

    //Se convierte de texto a numero
    let rang1 = parseInt(rango1.value);
    let rang2 = parseInt(rango2.value);
    let rang3 = parseInt(rango3.value);
    let rang4 = parseInt(rango4.value);
  
    //Se integran a la lista
    let lista_rangos = [rang1,rang2,rang3,rang4];


    
    for (let i = 0; i < 4; i++) {
        console.log("entro al for");
        if (i == 0) {
            console.log("entro a la condicional 1");
            if (lista_rangos[i] == 1) {
                console.log("entro a la condicional 2")
                const bola = document.createElement("img");
    
                // Establece la ruta de la imagen
                bola.src = "img/lavado-en-seco.png";
                // Añade clase a la imagen 
                bola.classList.add("circulos");
    
                //Integra el icono de la bola al navegador
                cont_bola1.appendChild(bola);
    
            } else if(lista_rangos[i] == 2){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
    
                cont_bola1.appendChild(bola);
                cont_bola1.appendChild(bola2);
                
            }else if(lista_rangos[i] == 3){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement( "img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
    
                cont_bola1.appendChild(bola);
                cont_bola1.appendChild(bola2);
                cont_bola1.appendChild(bola3);

                console.log("no debe de entrar aqui")
            
    
            }else if(lista_rangos[i] == 4){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4= document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
    
                cont_bola1.appendChild(bola);
                cont_bola1.appendChild(bola2);
                cont_bola1.appendChild(bola3);
                cont_bola1.appendChild(bola4);

                console.log("hoy de entrar aqui")
    
            }else if (lista_rangos[i] >= 5) {
                
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4 = document.createElement("img");
                const bola5 = document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
                bola5.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
                bola5.classList.add("circulos");
                
                cont_bola1.appendChild(bola);
                cont_bola1.appendChild(bola2);
                cont_bola1.appendChild(bola3);
                cont_bola1.appendChild(bola4);
                cont_bola1.appendChild(bola5);
                console.log("no debe de entrar aqui");
    
            }else if(lista_rangos[i] <= 0){
                continue;
            }
        }else if(i == 1){
            if (lista_rangos[i] == 1) {
                const bola = document.createElement("img");
                bola.src = "img/lavado-en-seco.png";
                bola.classList.add("circulos");
                cont_bola2.appendChild(bola);
    
            } else if(lista_rangos[i] == 2){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
    
                cont_bola2.appendChild(bola);
                cont_bola2.appendChild(bola2);
                
            }else if(lista_rangos[i] == 3){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement( "img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
    
                cont_bola2.appendChild(bola);
                cont_bola2.appendChild(bola2);
                cont_bola2.appendChild(bola3);
            
    
            }else if(lista_rangos[i] == 4){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4= document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
    
                cont_bola2.appendChild(bola);
                cont_bola2.appendChild(bola2);
                cont_bola2.appendChild(bola3);
                cont_bola2.appendChild(bola4);
    
            }else if (lista_rangos[i] >= 5) {
                
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4 = document.createElement("img");
                const bola5 = document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
                bola5.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
                bola5.classList.add("circulos");
                
                cont_bola2.appendChild(bola);
                cont_bola2.appendChild(bola2);
                cont_bola2.appendChild(bola3);
                cont_bola2.appendChild(bola4);
                cont_bola2.appendChild(bola5);
    
            }else if(lista_rangos[i] <= 0){
                continue;
            }
        }else if(i == 2){
            if (lista_rangos[i] == 1) {
                const bola = document.createElement("img");
    
                // Establece la ruta de la imagen
                bola.src = "img/lavado-en-seco.png";
                // Añade clase a la imagen 
                bola.classList.add("circulos");
    
                //Integra el icono de la bola al navegador
                //ESTA VARA VARIA MUCHOOOOOOOOOOOOO
                cont_bola3.appendChild(bola);
    
            } else if(lista_rangos[i] == 2){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
    
                cont_bola3.appendChild(bola);
                cont_bola3.appendChild(bola2);
                
            }else if(lista_rangos[i] == 3){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement( "img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
    
                cont_bola3.appendChild(bola);
                cont_bola3.appendChild(bola2);
                cont_bola3.appendChild(bola3);
            
    
            }else if(lista_rangos[i] == 4){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4= document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
    
                cont_bola3.appendChild(bola);
                cont_bola3.appendChild(bola2);
                cont_bola3.appendChild(bola3);
                cont_bola3.appendChild(bola4);
    
            }else if (lista_rangos[i] >= 5) {
                
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4 = document.createElement("img");
                const bola5 = document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
                bola5.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
                bola5.classList.add("circulos");
                
                cont_bola3.appendChild(bola);
                cont_bola3.appendChild(bola2);
                cont_bola3.appendChild(bola3);
                cont_bola3.appendChild(bola4);
                cont_bola3.appendChild(bola5);
    
            }else if(lista_rangos[i] <= 0){
                continue;
            }
        }else if(i == 3){
            if (lista_rangos[i] == 1) {
                const bola = document.createElement("img");

                bola.src = "img/lavado-en-seco.png";
                bola.classList.add("circulos");
                cont_bola4.appendChild(bola);
    
            } else if(lista_rangos[i] == 2){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
    
                cont_bola4.appendChild(bola);
                cont_bola4.appendChild(bola2);
                
            }else if(lista_rangos[i] == 3){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement( "img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
    
                cont_bola4.appendChild(bola);
                cont_bola4.appendChild(bola2);
                cont_bola4.appendChild(bola3);
            
    
            }else if(lista_rangos[i] == 4){
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4= document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
    
                cont_bola4.appendChild(bola);
                cont_bola4.appendChild(bola2);
                cont_bola4.appendChild(bola3);
                cont_bola4.appendChild(bola4);
    
            }else if (lista_rangos[i] >= 5) {
                
                const bola = document.createElement("img");
                const bola2 = document.createElement("img");
                const bola3 = document.createElement("img");
                const bola4 = document.createElement("img");
                const bola5 = document.createElement("img");
    
                bola.src = "img/lavado-en-seco.png";
                bola2.src = "img/lavado-en-seco.png";
                bola3.src = "img/lavado-en-seco.png";
                bola4.src = "img/lavado-en-seco.png";
                bola5.src = "img/lavado-en-seco.png";
    
                bola.classList.add("circulos");
                bola2.classList.add("circulos");
                bola3.classList.add("circulos");
                bola4.classList.add("circulos");
                bola5.classList.add("circulos");
                
                cont_bola4.appendChild(bola);
                cont_bola4.appendChild(bola2);
                cont_bola4.appendChild(bola3);
                cont_bola4.appendChild(bola4);
                cont_bola4.appendChild(bola5);
    
            }else if(lista_rangos[i] <= 0){
                continue;
            }
        }   
    }
});




