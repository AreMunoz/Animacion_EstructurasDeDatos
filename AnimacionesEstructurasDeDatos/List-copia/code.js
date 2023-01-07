function cCodigoUpdate(p_value){
 
   var divContenedor = document.getElementById("code");
    var htmlInicial = divContenedor.innerHTML;                      //valor inicial de innerHTML
    var htmlFin = htmlInicial + "<br>" +"&#9;&#9;&#9;"+ p_value +"<br>";           //concatenamos el nuevo valor
                                                                                    //&#9; es un tabulador en ASCII
    divContenedor.innerHTML = htmlFin;                              //actualizamos innerHTML

}