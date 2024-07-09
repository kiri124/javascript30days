/* function haber(){
    function DisplayName(){
        console.log("aspiraaar");
    }
    DisplayName();
} haber();

console.log("******");


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


//a,b,c,d are arguments
const f= (a,b,c,d) =>{
  const sum=a+b+c*d;  
    return sum;
};
console.log(f(20,20,-20,20));
console.log("******");

const x=(a,b,c)=>a*b*c;
console.log(x(10,2,1));//omit return
console.log("******");


const mo=(m)=>x*x;

const mo2=(m,y)=>{
   return m+y;
}
console.log("------------------------")


function createCounter(initialValue){
    let count= initialValue;
    return{
        increment: function(){
         count++;   
        },
        getValue: function(){
            return count;
        }
    };
}

function practica(){
    
    var counter = createCounter(5);
    function Counter(){
        console.log(counter.getValue());
        counter.increment();
        console.log(counter.getValue());
        counter.increment();
        console.log(counter.getValue());
    }
    Counter();
}practica();

console.log("*************************************************")
console.log("*************************************************")
console.log("*************************************************")



function poo(intialValue){
    let count=initialValue;
    return{
        increment: function(){
        count++;
        },
        decrement: function(){
            count--;
        },
        getValue: function(){
        return count;
        }
    };
}



function llamar(n){
    let counter=createCounter(n)
    function Counter(){
        for (let i = 0; i <= n; i++) {
         console.log(counter.getValue());
        counter.increment();
        }
    }Counter();
    
}llamar(10);
console.log("*************************************************")
console.log("*************************************************")
console.log("*************************************************")



function poo(initialValue){
    let counter= initialValue;
    return{
        increment: function(){
        counter++;
        },
        getValue: function(){
            return counter;
        }
    };
}


function llamado(n){
    var counter=createCounter(n)
    function Counter(){
        for(let i=0;i<n;i++){
            console.log(counter.getValue());
            counter.increment();
            
        }
    }Counter();
}
llamado(20);


console.log("*************************************************")
console.log("*************************************************")
console.log("*************************************************")

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
*/
const readline=require('readline');

function validate(value){
//let count=value;
const number= parseInt(value,10);
if(isNaN(number)){
    return{valid:false,message:"la entrada" };
}

if(number< 0 || number>100){

    return{valid: false,message:"ahah "};
}
return{ valid: true, message: "entrada valida"};

}









