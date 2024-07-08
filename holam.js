const readline = require('readline');

function createCounter(Value){
    let counter = Value;
    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        getValue: function() {
            return counter;
        }
    };
}

function poo(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Por favor, ingrese un número: ', (entrada) => {
        let numero = parseInt(entrada, 10);

        if (isNaN(numero)){
            console.log("La entrada no es un número válido.");
            rl.close();
            return;
        }

        var counter = createCounter(numero);

        function contar() {
            for (let i = 0; i < 10; i++) {
                console.log(counter.getValue());
                counter.increment();
            }
        }

        contar();
        rl.close();
    });
}

poo();
