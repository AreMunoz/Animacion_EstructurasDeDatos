var caja = document.getElementById("caja");
var valor = document.getElementById("input");
var botonEnq = document.getElementById("enqueue");
var botonDeq = document.getElementById("dequeue");
var botonGuardar = document.getElementById("guardar");
var botonCargar = document.getElementById("cargar");

var cola = new queue();
var idPrimerElemento = 0;


botonEnq.addEventListener("click", event =>{
    let valor = document.getElementById("input");
    añadirBurbuja(valor.value);
    valor.value = null;
});

botonDeq.addEventListener("click", event =>{
    eliminarBurbuja();
});

botonGuardar.addEventListener("click", event =>{
    guardarCola();
})

botonCargar.addEventListener("click", event =>{
    cargarCola();
})

function añadirBurbuja(valor){
    let burbuja = document.createElement("div");

    if(valor != ""){
        let txtBurbuja = document.createTextNode(valor);
        let numElementos;
    
        cola.enqueue(valor);
        numElementos = cola.totalElements();
        
        burbuja.appendChild(txtBurbuja);
        burbuja.setAttribute("class", "burbuja");
        burbuja.setAttribute("id", numElementos.toString());
 
        if(numElementos != 0){
            añadirFlecha();   
        }
        agregarCodigoEnq(valor);
        caja.appendChild(burbuja);
    }
    return;
}

function eliminarBurbuja(){
    if(cola.head != null){
        let objetivo = document.getElementById(idPrimerElemento.toString());
        objetivo.remove();
        agregarCodigoDeq();
        eliminarFlecha();
        cola.dequeue();
    }
    idPrimerElemento += 1;
    return;
}

function añadirFlecha(){
    let flecha = document.createElement("div");
    flecha.setAttribute("class", "flecha");
    flecha.setAttribute("id", "flecha" + cola.totalElements().toString());
    caja.appendChild(flecha);
    return;
}

function eliminarFlecha(){
    let objetivo = document.getElementById("flecha"+(idPrimerElemento+1).toString());
    objetivo.remove();
    return;
}

function agregarCodigoEnq(valor){
    let contenedorCodigo = document.getElementById("codigoAñadido");
    let codigo = document.createElement("code");
    let txtCodigo = document.createTextNode("enqueue(queue, " + valor + ");\n");

    let contenedorCodigoC = document.getElementById("codigoACompleto");
    let codigoC = document.createElement("code");
    let txtCodigoC = document.createTextNode("enqueue(queue, " + valor + ");\n");

    codigo.appendChild(txtCodigo);
    codigo.setAttribute("id", "codigo" + cola.totalElements().toString()); 
    contenedorCodigo.appendChild(codigo);

    codigoC.appendChild(txtCodigoC);
    codigoC.setAttribute("id", "codigo" + cola.totalElements().toString()); 
    contenedorCodigoC.appendChild(codigoC);


    return;
}

function agregarCodigoDeq(){
    let contenedorCodigo = document.getElementById("codigoAñadido");
    let codigo = document.createElement("code");
    let txtCodigo = document.createTextNode("dequeue(queue);\n");

    let contenedorCodigoC = document.getElementById("codigoACompleto");
    let codigoC = document.createElement("code");
    let txtCodigoC = document.createTextNode("dequeue(queue);\n");

    codigo.appendChild(txtCodigo);
    codigo.setAttribute("id", "codigo" + cola.totalElements.toString()); 
    contenedorCodigo.appendChild(codigo);

    codigoC.appendChild(txtCodigoC);
    codigoC.setAttribute("id", "codigo" + cola.totalElements.toString()); 
    contenedorCodigoC.appendChild(codigoC);


    return;
}

function guardarCola(){
    let contenidos = cola.toArray();
    localStorage.setItem("cola", JSON.stringify(contenidos));
}

function cargarCola(){
    //Nota: se manda y recibe como json en localStorage
    let contenidos = JSON.parse(localStorage.getItem("cola"));
    
    contenidos.forEach(function(elemento){
        añadirBurbuja(elemento);
    })
}
