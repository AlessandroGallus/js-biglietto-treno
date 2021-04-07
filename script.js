var km = prompt("inserire il numero di km percorsi:");
var eta = prompt("inserire la propria eta':");

parseFloat(km);
parseInt(eta);

var costo;
parseFloat(costo);

if (eta<18){
    costo = ((km*0.21)-((km*0.21)/100*20));
    console.log("Il costo del biglietto è uguale a: " + costo.toFixed(2));
} else if (eta>65){
        costo = ((km*0.21)-((km*0.21)/100*40));
        console.log("Il costo del biglietto è uguale a: " + costo.toFixed(2));
    }else{
        costo=km*0.21;
        console.log("Il costo del biglietto è uguale a: " + costo.toFixed(2));
    }