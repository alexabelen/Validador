var numTarjeta; 
var mensaje;
var sumatoria=0;
function validarNumero() {

    numTarjeta = parseInt(document.getElementById("cardnumber").value);

    if ((numTarjeta>999999999999999)&&(9999999999999999>=numTarjeta)){

     var numTarjetaAux= numTarjeta+"";
     var arrayNumTarjeta= 
     [numTarjetaAux[0],
     numTarjetaAux[1],
     numTarjetaAux[2],
     numTarjetaAux[3],
     numTarjetaAux[4],
     numTarjetaAux[5],
     numTarjetaAux[6],
     numTarjetaAux[7],
     numTarjetaAux[8],
     numTarjetaAux[9], 
     numTarjetaAux[10], 
     numTarjetaAux[11], 
     numTarjetaAux[12], 
     numTarjetaAux[13],
     numTarjetaAux[14],
     numTarjetaAux[15],
    ]

    for (let index = 0; index < 16; index=index+2) {
        arrayNumTarjeta[index]=arrayNumTarjeta[index]*2;

        if(arrayNumTarjeta[index]>9){
            var aux=1+parseInt(arrayNumTarjeta[index]%10);
            arrayNumTarjeta[index]=aux+"";
        }
    }
    for (let index = 0; index < 16; index++) {
        sumatoria=sumatoria+parseInt(arrayNumTarjeta[index]);
        
    }
    if(sumatoria%10==0)
    {
        alert("El numero no es valido");
    }

    
    else{
        alert("El numero no es valido");
   }
}
   else{
    alert("El numero no es valido");
}
    


}

