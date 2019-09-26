var arreglo = [];
var numero;
var ocurrencias = 0;

function tres(numero,arreglo){
    for(var i=0; i<arreglo.length; i++){
        if(numero == arreglo[i]){
            ocurrencias++;
        }
    }
    console.log('el numero de ocurrencias de "' + numero + '" en el arreglo fue de ' + ocurrencias)
}