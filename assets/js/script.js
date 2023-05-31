import {
    propiedadesJSON as proper
} from "./index.js"


const boton = document.getElementById ("boton");
const casas = document.querySelector (".propiedades");
const total = document.getElementById ("total");

function validate(arr) {
    if (arr.includes('')) {
        return false;
    }
    return true;
}

function createProperty(property) {
    let newProperty = "";
    if (validate([property])) {
        newProperty = `<div class="propiedades">
        <div class="propiedad">
            <div class="img" style="background-image: url(${property.src})"></div>
                <section>
                    <h5>${property.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>${property.rooms}</p>
                        <p>${property.m}</p>
                    </div>
                    <p class="my-3">${property.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
        </div>
    </div>`
    }
    return newProperty;    
}

function maestra() {
    const cuartos = document.getElementById ("cuartos").value
    const min = document.getElementById ("min").value
    const max = document.getElementById ("max").value
    let html = ""

    
    if (validate([cuartos,min,max])) {
        console.log (cuartos, min, max, proper);
        let suma  = "";
        for (let propiedad of proper){
            if ((Number(min) <=  propiedad.m) && ( Number(max) >=  propiedad.m) && (Number(cuartos) == propiedad.rooms)) {
                html+= createProperty(propiedad);
            suma = Number(suma)+ 1;
            }
    
        } 
        casas.innerHTML=html;
        total.innerHTML="total: "+ suma;
    }

else { 
        alert ("Por favor rellenar los campos");
    }

}

boton.addEventListener("click",()=>{
    maestra();
})

