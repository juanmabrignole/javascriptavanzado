
// variable global

var x = 10;


//variable de función
function foo (){
    var y = 20;

    // ¿qué retornan? ambos están dentro de la función
    console.log(x);  // 10 Si no lo encuentra en su etorno lexico, busca en el global, mientras se ejecuta
    console.log(y); // 20
}

foo(); // recién acá se ejecuta la función

console.log(x);
// console.log(y); // retorna undefined ya que el entorno de ejecucion de la función foo ya desparació en ese momento


//objeto this

function saludar() {
    console.log("hola" , this)
};

saludar();

let Persona = {
    nombre: "Juanma",
    saludar: function (){
        console.log(this)
        console.log(this.nombre)
    }
}

Persona.saludar();


// hoisting : las variables declaradas con var, tienen la particularidad de existir inclusive antes de la línea en la que son declaradas, eso es el hoisting
miFuncion();

function miFuncion (){
    console.log(x);
    console.log(y);
    var x = 10;
    // var y = 20;
    // let y = 20; //me va a retornar que no puede acceder antes de la inicializacion
}

// hosting, la variable con var existe antes de ser declarada y con el valor undefined
console.log(y);
var y = 20;

// PILA DE EJECUCIÓN

var x = 10;

//entorno 1
function otroSaludar(){
    console.log("hola");
}

// entorno 2
function miFuncionFavorita (){
    var y = 20;
    console.log(x);
    console.log(y);
    // entorno 3
    otroSaludar();
}

miFuncionFavorita();

// EXCESO DE MÁXIMO DE PILA

saludar();

let Persona2 = {
    nombre: "Juanma",
    saludar: function (){
        console.log(this. saludar());
    }
}

Persona2.saludar();

// ! LET Y CONST => NO HACEN HOISTING

// HOMEWORK

function BinarioADecimal(num) {
    // Convertimos el número binario a decimal usando parseInt
  let decimal = parseInt(num, 2);

  return decimal;
}


// Ejemplo de uso
let numeroBinario = "1011";
let decimalResultante = BinarioADecimal(numeroBinario);

console.log(`El número binario ${numeroBinario} en decimal es: ${decimalResultante}`);

function decimalABinario(numeroDecimal) {
    // Verificamos que el argumento sea un número entero no negativo
    if (!Number.isInteger(numeroDecimal) || numeroDecimal < 0) {
      return "Ingrese un número entero no negativo.";
    }
  
    // Convertimos el número decimal a binario usando el método toString
    var binario = numeroDecimal.toString(2);
  
    return binario;
  }
  
  // Ejemplo de uso
  var numeroDecimal = 10;
  var binarioResultante = decimalABinario(numeroDecimal);
  
  console.log(`El número decimal ${numeroDecimal} en binario es: ${binarioResultante}`);