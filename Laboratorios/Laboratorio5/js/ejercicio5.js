function cinco(palabra){
    let validacion = true;
    let palabra2=[];
    for(var i=0; i<palabra.length; i++){
        if(i!=palabra.length){
            //console.log(palabra[palabra.length-i-1]);
            palabra2.push(palabra[palabra.length-i-1]);
            //console.log(palabra2[i]);
            

        }
    }
    for(var i=0; i<palabra.length;i++){
        if(palabra[i]!=palabra2[i]){
            validacion=false;
        }
    }

    if(validacion){
        console.log("Es palindroma :)")
    }

    else if(!validacion){
        console.log("No es palindromo :(")
    }

}