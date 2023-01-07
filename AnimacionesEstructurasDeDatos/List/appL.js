var caja = document.getElementById("caja");

var botonAInicio = document.getElementById("aInicio");
var botonAFinal = document.getElementById("aFinal");
var botonAPos = document.getElementById("aPosicion");
var aValor = document.getElementById("input");
var aPosicion = document.getElementById("valorPosicion");

var botonEInicio = document.getElementById("eInicio");
var botonEFinal = document.getElementById("eFinal");
var botonEPos = document.getElementById("ePosicion");
var botonEVal = document.getElementById("botEValor");
var eValor = document.getElementById("eliminarValor");
var ePosicion = document.getElementById("eliminarPosicion");

var botonGuardar = document.getElementById("guardar");
var botonCargar = document.getElementById("cargar");

var lista = new linkedList();
var idInicio = 0, idUltimo = 0;

// Escuchas de cada boton
//Funcion Lista
botonAInicio.addEventListener("click", event =>{
    let valor = aValor.value;
    agregarInicio(valor);
    aValor.value = null;
});
//Funcion Lista
botonAFinal.addEventListener("click", event =>{
    let valor = aValor.value;
    agregarFinal(valor);
    aValor.value = null;
});
//Funcionando
botonAPos.addEventListener("click", event =>{
    let valor = aValor.value;
    let posicion = aPosicion.value;
    agregarPosicion(valor, posicion-1);
    aValor.value = null;
    aPosicion.value = null;
});

//Botones encargados de eliminar
//Listo
botonEInicio.addEventListener("click", event =>{
    eliminarInicio();
});
//Listo
botonEFinal.addEventListener("click", event =>{
    eliminarFinal();
});
//Listo
botonEPos.addEventListener("click", event =>{
    let posicion = ePosicion.value;
    eliminarPosicion(posicion-1);
    ePosicion.value = null;
});

botonEVal.addEventListener("click", event =>{
    let valor = eValor.value;
    eliminarValor(valor);
    eValor.value = null;
});

botonGuardar.addEventListener("click", event =>{
    guardarLista();
});

botonCargar.addEventListener("click", event =>{
    cargarLista();
});

//Funciones encargadas de agregar
function agregarInicio(valor){
    if(lista.head != null){
        //Limpiando todas las burbujas
        iterador = limpiarElementos();

        //Agregando nuevo elemento
        agregarFinal(valor);
        
        //Redibujando el resto
        iterador.forEach(elemento=>{
            agregarFinal(elemento);
        });   
    }
    else 
        agregarFinal(valor); 
    return;
}

//Borra todos los elementos tanto de la lista como del html creados y regresa una copia de la lista original en array
function limpiarElementos(){
    let iterador = lista.toArray();
        iterador.forEach(()=>{
            eliminarInicio();
        });
        idInicio = 0;
        idUltimo = 0;
    return iterador;
}

// funcionando
function agregarFinal(valor){
    let burbuja = document.createElement("div");
    if(valor != ""){
        let txtBurbuja = document.createTextNode(valor);
        lista.append(valor);
        
        burbuja.appendChild(txtBurbuja);
        burbuja.setAttribute("class", "burbuja");
        burbuja.setAttribute("id", "burbuja"+idUltimo.toString());
 
        if(idUltimo != 0){
            añadirFlecha(idUltimo);   
        }
        agregarCodigoInicio(valor);
        caja.appendChild(burbuja);
        idUltimo+=1;
    }
    return;
}
//Funcionando
function agregarPosicion(valor, posicion){
    if(lista.head != null){
        let copia = limpiarElementos();
        let iterador = 0;
        
        copia.forEach(elemento =>{
            if(iterador == posicion){
                agregarFinal(valor);
            }
            agregarFinal(elemento);
            iterador++;
        });
        if(posicion == iterador)
            agregarFinal(valor);
    }
    else 
        agregarFinal(valor);
    return;
}

// Funciones encargadas de eliminar

//Funcionando
function eliminarInicio(){
    if(lista.head != null){
        let posFlecha = idInicio+1;
        let objetivo = document.getElementById("burbuja"+idInicio.toString());
        objetivo.remove();
        agregarCodigoEliminarInicio();
        
        if(lista.totalElements() >= 1){
            eliminarFlecha(posFlecha);
        }

        lista.eraseAtBeginning();
        idInicio += 1; //Como eliminamos el primer elemento ahora el siguiente elemento es el inicio
    }
    return;
}
//Funcionando
function eliminarFinal(){
    if(idUltimo > 1){
        eliminarBurbuja(idUltimo-1);
        eliminarFlecha(idUltimo-1);
        idUltimo-=1;
    }
    else 
        eliminarInicio();
    return;
}

function eliminarPosicion(posicion){
    let aux = limpiarElementos();
    let iterador = 0;

    aux.forEach(elemento =>{
        if(iterador != posicion){
            agregarFinal(elemento);
        }
        iterador +=1;
    });
    return;
}
//Funcionando
function eliminarValor(valor){
    let aux = limpiarElementos();
    aux.forEach(elemento =>{
        if(elemento != valor){
            agregarFinal(elemento);
        }
    });
    return;
}

// Funciones para añadir una flecha con posicion personlizada
//Funciones de flecha funcionando
function añadirFlecha(posicion){
    let flecha = document.createElement("div");
    flecha.setAttribute("class", "flecha");
    flecha.setAttribute("id", "flecha" + posicion.toString());
    caja.appendChild(flecha);
    return;
}

//Modificada para eliminar una flecha por medio de su posicion (Listas)
function eliminarFlecha(posicion){
    let objetivo = document.getElementById("flecha"+posicion.toString());
    objetivo.remove();
    return;
}

function eliminarBurbuja(posicion){
    let objetivo = document.getElementById("burbuja"+posicion.toString());
    objetivo.remove();
    lista.eraseAtPosition(posicion);
    return
}

// Almacenamiento y recuperacion de datos

//Lista
function guardarLista(){
    let contenidos = lista.toArray();
    localStorage.setItem("lista", JSON.stringify(contenidos));
}

//Lista
function cargarLista(){
    //Nota: se manda y recibe como json en localStorage
    let contenidos = JSON.parse(localStorage.getItem("lista"));
    
    contenidos.forEach(function(elemento){
        agregarFinal(elemento);
    })
}

//Funciones de agregacion de codigo en C
function agregarCodigoInicio(){
    return;
}

function agregarCodigoEliminarInicio(){
    return;
}

//Funcion de ejemplo de agregacion de codigo
//Nota: el codigo está contenido en el div de id codigoAñadido

function agregarCodigoEnq(valor){
    let contenedorCodigo = document.getElementById("codigoAñadido");
    let codigo = document.createElement("code");
    let txtCodigo = document.createTextNode("Enqueue(" + valor + ");\n");
    codigo.appendChild(txtCodigo);
    codigo.setAttribute("id", "codigo" + cola.totalElements.toString()); 
    contenedorCodigo.appendChild(codigo);
    return;
}



