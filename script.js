var km = prompt("inserire il numero di km percorsi:");
var eta = prompt("inserire la propria eta':");

parseInt(km);
parseInt(eta);

var costo;
parseFloat(costo);

if (eta<18){

    costo = ((km*0.21)-((km*0.21)/100*20));
    console.log(costo);
} else if (eta>65){
        costo = ((km*0.21)-((km*0.21)/100*40));
        console.log(costo);
    }else{
        costo=km*0.21;
        console.log(costo);
    }