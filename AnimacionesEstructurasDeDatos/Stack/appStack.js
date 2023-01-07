var caja = document.getElementById("caja");
var valor = document.getElementById("input");
var botonPush = document.getElementById("push");
var botonPop = document.getElementById("pop");
var botonGuardar = document.getElementById("guardar");
var botonCargar = document.getElementById("cargar");

var pila = new stack();


botonPush.addEventListener("click", event =>{
    let valor = document.getElementById("input");
    añadirBurbuja(valor.value);
    valor.value = null;
});

botonPop.addEventListener("click", event =>{
    eliminarBurbuja();
});

botonGuardar.addEventListener("click", event =>{
    guardarPila();
})

botonCargar.addEventListener("click", event =>{
    cargarPila();
})

function añadirBurbuja(valor){
    let burbuja = document.createElement("div");

    if(valor != ""){
        let txtBurbuja = document.createTextNode(valor);
        let numElementos;
    
        pila.push(valor);
        numElementos = pila.totalElements();
        
        burbuja.appendChild(txtBurbuja);
        burbuja.setAttribute("class", "burbuja");
        burbuja.setAttribute("id", numElementos.toString());
 
        if(numElementos != 0){
            añadirFlecha();   
        }
        agregarCodigoPush(valor);
        caja.appendChild(burbuja);
    }
    return;
}

function eliminarBurbuja(){
    if(pila.head != null){
        let ultimoElemento = pila.totalElements();
        let objetivo = document.getElementById(ultimoElemento.toString());
        objetivo.remove();
        agregarCodigoPop();
        if(ultimoElemento != 0){
            eliminarFlecha();
        }
        pila.pop();
    }
    return;
}

function añadirFlecha(){
    let flecha = document.createElement("div");
    flecha.setAttribute("class", "flecha");
    flecha.setAttribute("id", "flecha" + pila.totalElements().toString());
    caja.appendChild(flecha);
    return;
}

function eliminarFlecha(){
    let ultimoElemento = pila.totalElements();
    let objetivo = document.getElementById("flecha"+ultimoElemento.toString());
    objetivo.remove();
    return;
}

function agregarCodigoPush(valor){
    let contenedorCodigo = document.getElementById("codigoA");
    let codigo = document.createElement("code");
    let txtCodigo = document.createTextNode("push(stack, " + valor + ");\n");

    let contenedorCodigo_completo = document.getElementById("codigoACompleto");
    let codigoC = document.createElement("code");
    let txtCodigoC = document.createTextNode("push(stack, " + valor + ");\n");

    codigo.appendChild(txtCodigo);
    codigo.setAttribute("id", "codigo" + pila.totalElements().toString()); 

    codigoC.appendChild(txtCodigoC);
    codigoC.setAttribute("id", "codigo" + pila.totalElements().toString()); 
    
    contenedorCodigo.appendChild(codigo);
    contenedorCodigo_completo.appendChild(codigoC);

    return;
}

function agregarCodigoPop(){
    let contenedorCodigo = document.getElementById("codigoA");
    let codigo = document.createElement("code");
    let txtCodigo = document.createTextNode("pop(stack);\n");

    let contenedorCodigoC = document.getElementById("codigoACompleto");
    let codigoC = document.createElement("code");
    let txtCodigoC = document.createTextNode("pop(stack);\n");

    codigo.appendChild(txtCodigo);
    codigo.setAttribute("id", "codigo" + pila.totalElements().toString()); 
    contenedorCodigo.appendChild(codigo);

    codigoC.appendChild(txtCodigoC);
    codigoC.setAttribute("id", "codigo" + pila.totalElements().toString()); 
    contenedorCodigoC.appendChild(codigoC);

    return;
}

function guardarPila(){
    let  contenidos = pila.toArray();
    localStorage.setItem("pila", JSON.stringify(contenidos));
}

function cargarPila(){
    //Nota: se manda y recibe como json en localStorage
    let contenidos = JSON.parse(localStorage.getItem("pila"));
    contenidos = contenidos.reverse();
    
    contenidos.forEach(function(elemento){
        añadirBurbuja(elemento);
    })
}
