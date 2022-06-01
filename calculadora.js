//CALCULADORA SIMPLES

const x = 10;
const y = 5;
const conta = "+";

function calculadora (x,y,conta) {
    if (conta === "+"){
        return x + y;
    }else if (conta ==="-"){
        return x - y;
    }else if (conta === "*"){
        return x * y;
    }else if ( conta === "/") {
        return x / y;
    }else{
        console.log(" não foi possivel calcular");
    }
}

console.log(calculadora(x,y,conta));