var arreglo=[]
function uno(arreglo) {
    var s;
    let numFunciones = 0;
    let numNumeros = 0;
    let numStrings = 0;
    let numObjetos = 0;
    for (var i=0; i < arreglo.length; i++) {
        console.log('dato ' + i  + ': ' + typeof arreglo[i]); 
        if(typeof arreglo[i]=='function'){
            numFunciones++;
        }
        if(typeof arreglo[i]=='string'){
            numStrings++;
        }
        if(typeof arreglo[i]=='number'){
            numNumeros++;
        }
        if(typeof arreglo[i]=='object'){
            numObjetos++;
        }

        
    }
    if (numFunciones!=0){
        console.log('numero de funciones: ' +numFunciones)
    }

    if(numNumeros!=0){
        console.log('numero de numeros: ' +numNumeros)
    }

    if(numStrings!=0){
        console.log('numero de strings: ' +numStrings)
    }

    if(numObjetos!=0){
        console.log('numero de objetos: ' +numObjetos)
    }

    
}