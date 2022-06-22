var infoNum = 10;
var num = infoNum;
var sequenciaFibo = [];

function fibonacci(num){
    
    if(num < 2) {
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

for (let i = 0; i < infoNum+2; i++) {
    sequenciaFibo[i] =  fibonacci(i);
    if(sequenciaFibo[i] === infoNum) {

        return console.log(`Você informou o número ${infoNum}, ele está na sequência de Fibonacci` )

    }
}

return console.log(`Você informou o número ${infoNum}, ele não está na sequência de Fibonacci`);