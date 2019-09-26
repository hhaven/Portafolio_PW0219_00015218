arreglo=[];

function dos(arreglo){
    let suma=0;
    let promedio=0;
    for(var i=0; i<arreglo.length; i++){
        suma +=arreglo[i];
    }
    promedio=(suma/arreglo.length);
    console.log('la suma es: ' + suma + ' y el promedio es: ' + promedio);
}