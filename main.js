
// // variable global

// var x = 10;


// //variable de función
// function foo (){
//     var y = 20;

//     // ¿qué retornan? ambos están dentro de la función
//     console.log(x);  // 10 Si no lo encuentra en su etorno lexico, busca en el global, mientras se ejecuta
//     console.log(y); // 20
// }

// foo(); // recién acá se ejecuta la función

// console.log(x);
// // console.log(y); // retorna undefined ya que el entorno de ejecucion de la función foo ya desparació en ese momento


// //objeto this

// function saludar() {
//     console.log("hola" , this)
// };

// saludar();

// let Persona = {
//     nombre: "Juanma",
//     saludar: function (){
//         console.log(this)
//         console.log(this.nombre)
//     }
// }

// Persona.saludar();


// // hoisting : las variables declaradas con var, tienen la particularidad de existir inclusive antes de la línea en la que son declaradas, eso es el hoisting
// miFuncion();

// function miFuncion (){
//     console.log(x);
//     console.log(y);
//     var x = 10;
//     // var y = 20;
//     // let y = 20; //me va a retornar que no puede acceder antes de la inicializacion
// }

// // hosting, la variable con var existe antes de ser declarada y con el valor undefined
// console.log(y);
// var y = 20;

// // PILA DE EJECUCIÓN

// var x = 10;

// //entorno 1
// function otroSaludar(){
//     console.log("hola");
// }

// // entorno 2
// function miFuncionFavorita (){
//     var y = 20;
//     console.log(x);
//     console.log(y);
//     // entorno 3
//     otroSaludar();
// }

// miFuncionFavorita();

// // EXCESO DE MÁXIMO DE PILA

// saludar();

// let Persona2 = {
//     nombre: "Juanma",
//     saludar: function (){
//         console.log(this. saludar());
//     }
// }

// Persona2.saludar();

// // ! LET Y CONST => NO HACEN HOISTING

// // HOMEWORK

// function BinarioADecimal(num) {
//     // Convertimos el número binario a decimal usando parseInt
//   let decimal = parseInt(num, 2);

//   return decimal;
// }


// // Ejemplo de uso
// let numeroBinario = "1011";
// let decimalResultante = BinarioADecimal(numeroBinario);

// console.log(`El número binario ${numeroBinario} en decimal es: ${decimalResultante}`);

// function decimalABinario(numeroDecimal) {
//     // Verificamos que el argumento sea un número entero no negativo
//     if (!Number.isInteger(numeroDecimal) || numeroDecimal < 0) {
//       return "Ingrese un número entero no negativo.";
//     }
  
//     // Convertimos el número decimal a binario usando el método toString
//     var binario = numeroDecimal.toString(2);
  
//     return binario;
//   }
  
//   // Ejemplo de uso
//   var numeroDecimal = 10;
//   var binarioResultante = decimalABinario(numeroDecimal);
  
//   console.log(`El número decimal ${numeroDecimal} en binario es: ${binarioResultante}`);


  //* CLOSURES

  //* FUNCIÓN PADRE
  function contenedor (caja){
    // var caja = [];

    //* FUNCIÓN QUE RETORNA (HIJA)
    return function(item){
        //*VEMOS QUE CAJA PERTENECE AL SCOPE DE LA FUNCIÓN PADRE
        caja.push(item); 
        return caja;
    };
  };

  //* AHORA MICONTENEDOR ALOJA LA FUNCIÓN DE RETORNO
  var miContenedor = contenedor([]);

  //*envío los argumentos y se van cargando en la funci´pon padre y retorna la función con el array actualizado
  console.log(miContenedor("Libro"));
  console.log(miContenedor("Disco"));
  
  //* TAMBIEN FUNCIONA CON UN CONTADOR

   //* FUNCIÓN PADRE
   function contenedor (){
    var contador = 0;

    //* FUNCIÓN QUE RETORNA
    return function(){
        contador++;
        return contador;
    };
  };

  //* AHORA MICONTENEDOR ALOJA LA FUNCIÓN DE RETORNO
  var miContenedor = contenedor();

  //*envío los argumentos y se van cargando en la funci´pon padre y retorna la función con el array actualizado
  console.log(miContenedor("Libro"));
  console.log(miContenedor("Disco"));
  console.log(miContenedor("cosas"));
  console.log(miContenedor("mas cosas"));

//*Ejercicios sobre Closures:

// Ejercicio 1:
// Crea una función EXTERNA que tome un parámetro y devuelva una función que tome otro parámetro. La función interna debe sumar ambos parámetros y retornar el resultado.

function outer(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = outer(5);
  console.log(add5(3)); // Debería imprimir 8
  
// Ejercicio 2:
// Modifica el siguiente código para que la variable privateCounter sea accesible solo mediante el uso de closures.

function counter() {
    let privateCounter = 0;
  
    return {
      increment: function() {
        privateCounter++;
      },
      decrement: function() {
        privateCounter--;
      },
      value: function() {
        return privateCounter;
      }
    };
  }
  
  const myCounter = counter();
  myCounter.increment();
  console.log(myCounter.value()); // Debería imprimir 1
  
  //* METODOS DE CONTEXTO

  //! METODO BIND

  var Persona = {
    nombre: "Ignacio",
    apellido: "Cenni"
  }

  function saludar(saludo){
    //* me retorna undefined ya que quien ejecuta la función es en ojeto global
    console.log( saludo, ", mi nombre es ", this.nombre, this.apellido);
  }

  //* ASOCIO LA FUNCIÓN SALUDAR A PERSONA CON BIND
  //* EN ESTA NUEVA VERSION(COPIA) DE LA FUNCION ORIGINAL, THIS VA A SER PERSONA
  //* TAMBIÉN CON BIND LE PUEDO MANDAR UN VALOR AL PARÁMETRO DE LA FUNCIÓN
  var saludarPersona = saludar.bind(Persona, "Hola buen día");
  
  saludarPersona();
  
  //! METODO CALL

  var Persona02 = {
    nombre: "Ignacio",
    apellido: "Cenni"
  }

  function otroSaludar(saludando){
    //* me retorna undefined ya que quien ejecuta la función es en ojeto global
    console.log( saludando, ", mi nombre es ", this.nombre);
  }

  //* EL MÉTODO CALL SE EJECUTA INMEDIATAMENTE
  otroSaludar.call(Persona02, "Hola");

    //! METODO APPLY

    var Persona03 = {
        nombre: "Juanma",
        apellido: "Brignole"
      }
    
      function ultimoSaludo(saludando,a,b,c){
        //* me retorna undefined ya que quien ejecuta la función es en ojeto global
        console.log(a);
        console.log(b);
        console.log(c);
      }
    
      //* EL MÉTODO APPLY ENVÍA LOS DATOS DE LOS PARAMETROS MEDIANTE UN ARRAY. SE EJECUTA INMEDIATAMENTE. 
     ultimoSaludo.apply(Persona03, ["Hola", 1,2,3]);
  
    //! ESTRUCTURAS DE DATOS I
    //! RECURSIVIDAD (FUNCIONES QUE SE LLAMAN A SI MISMAS)

    //*este programita imprime hasta que corta sólo
    function contarNumeros(num){
        console.log(num);

        //* se llama a sí misma (recursividad)
        //* se rompe porque desciende hasta números negativos y se agota
        contarNumeros(num - 1);
    }

    contarNumeros(10);

    //*en cambio este no corta sólo, sigue

    function contarNumeros (num){
        while(true){
            console.log(num);
            num--;
        }
    }
   contarNumeros(10);

   //* Por ello siempre debo tener una condición de corto a la hora de usar recursividad

   function contarNumeros(num){
    console.log(num);

    if (num === 0){
        return "Terminó"
    }

    contarNumeros(num - 1);
   }

   contarNumeros(10);

   //* otro ejemplo recursividad

   function sumar(num){
    if (num >= 10) return num;
    console.log(num);
    return sumar(num + 2);
   };

   sumar(10);

   //* RECURSIVIDAD CON FACTORIAL

   function factorial (num){
    if (num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num - 1);
   }

   var factorial = factorial(5);
   console.log(factorial);

   //* SET => ES UNA CLASE QUE TIENE LA PARTICULARIDAD QUE NO PUEDO AGREGARLE ELEMENTOS REPETIDOS

   var miSet = new Set();
   miSet.add(5);
   miSet.add(5);
   miSet.add(7);
   console.log(miSet);

//! STACK = > va a ser una clase
//! miStack => instancia de la clase Stack
//! objetos => propiedades y métodos
//! Métodos => lo que el objeto puede o saber hacer
//! stack puede hacer dos cosas: agregar un elemento - sacar un elemento
//! agregar y sacar van ser métodos => los métodos son funciones
//! Para representar lapila vamos a usar un array

   function Stack() {
    this.array = []; //! PROPIEDAD
   }

   //* función encargada de agregar elementos al array
   Stack.prototype.push = function (value){
    this.array.push(value);
   };

    //* función encargada de quitar elementos al array
   Stack.prototype.pop= function(){
    this.array.pop();
   };

   var miStack = new Stack();
  //  console.log(miStack);
   
   miStack.push(50);
   miStack.push(20);
   miStack.push(30);
   miStack.push(420);

   miStack.pop();

   console.log(miStack);
     //Dudas
   var miArrayNormal = [1, 2, 3];
   miArrayNormal.push(5);
   console.log(miArrayNormal);

   //! HOMEWORK ESTRUCTURA DE DATOS I

   /*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {}

function nFibonacci(n) {}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function(){}
Queue.prototype.dequeue = function(){}
Queue.prototype.size = function(){}

//   //* puse los ejercicios que pude hacer, algunos completos segun los test y otros que estan incompletos. cada ejercicio tiene comentarios con dudas y aclaraciones que hice.

// //! LA DUDA PRINCIPAL QUE ME GUSTARIA VER QUE ES LA QUE ME TRABA EN MUCHOS EJERCICIOS ES COMO SE AGREGAN Y MANIPULAN PROPIEDADES Y VALORES DE LAS PROPIEDADES A LOS OBJETOS.


// //!JS A 2
// //! CLOUSURES
// //como es que llega "libro" a item???
// function contenedor(){
//     var caja =[]

//     return function(item){
//         caja.push(item); //la sintaxis no me termina de queda clara
//         return caja;
//     }
// }
// var miContenedor = contenedor();
// console.log(miContenedor("libro"));
// console.log(miContenedor("cuaderno"));

// //* dudas en este ejercicio: 
//caja.push(item); //la sintaxis no me termina de queda clara. ME CUESTA AGREGAR PROPIEDADES Y VALORES DE LAS PROPIEDADES DE LOS OBJETOS

// //----------------------------------------------------------------------------------------

// //* pegar una repasada rapida a estos tres

//.bind permite que le indiquemos quien es this. Guarda una funcion, la guardo en una variable

//.call te jecuto y termina. funciona parecido a bind salvo que call se ejecuta instantaneamente y una sola vez

//.apply funciona igual a call salvo que los argumentos se pasan dentro de un arreglo

// //*-----------------------------------------------------------------------------------------------
// //!ESTRUCTURA DE DATOS 1 => tres ejercicios factorial/ fibonacci / Queue
// //Repaso pero creo tenerlo claro
// function nFactorial(n) {
//   if(n === 0 || n === 1){
//     return 1;
//   }
//   return n * nFactorial(n - 1);
// };
// var elNumeroFactorial = nFactorial(6);
// console.log(elNumeroFactorial);

// //---------------------------------------------------------------------------------------------
// //repaso pero creo tenerlo claro
//   function nFibonacci(n) {
//     if(n < 2) return n
//     return nFibonacci(n - 2) + nFibonacci(n - 1); // dos numero para atras y uno para atras

//     };
    
// var secuencia = nFibonacci(7);
// console.log(secuencia);
// //----------------------------------------------------------------------------------------------
// //* me cuesta, puede hacer todas estas pero en el test me arroja los siguientes errores:
// //! x devuelve el item correcto cuando dequeeamos
// //! x maneja bien el underflow, cuando no hay elementos dequeue devuelve undefined
// //! x maneja bien varios enqueue y dequeue
// //! agrega y remueve sus propios items

// function Queue() {
//   //array donde voy agregando y quitando elementos
//   this.arr = [];
//   if(this.arr.length === 0) return undefined; // no me devuelve undefined
  
// }
// Queue.prototype.enqueue = function(valor){
//   this.arr.push(valor); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()?
// }; 

// Queue.prototype.dequeue = function(){
//    if(!this.arr.length) return undefined;
//    this.arr.shift(); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va shift()?
// }; 

// Queue.prototype.size = function(){
//   return this.arr.length;
// }
// //*---------------------------------------------------------------------------------------
// //*agrego elementos FIFO
// var agregoElemento = new Queue();
// agregoElemento.enqueue(10);
// console.log(agregoElemento);
// agregoElemento.enqueue(20); 
// console.log(agregoElemento);
// agregoElemento.enqueue(30); 
// console.log(agregoElemento);
// //*----------------------------------------------------------------------------------
// //* quito elementos.Aca lo hice directamente con agrego elemento sacondo los valores puestos FIFO
// // agregoElemento.dequeue();// quito primer elemento en entrar
// // console.log(agregoElemento); // 20, 30
// // agregoElemento.dequeue(); // quito elemento que entro primero
// // console.log(agregoElemento); // 30
// // agregoElemento.dequeue(); //quito elemento que entro primero
// // console.log(agregoElemento); //
// //---------------------------------------------------------------------------------------
// //*aca creo una nueva variable para sacarle los elementos FIFO
// var quitoElemento = agregoElemento;
// console.log(quitoElemento);
// quitoElemento.dequeue();
// console.log(quitoElemento)
// quitoElemento.dequeue();
// console.log(quitoElemento)
// quitoElemento.dequeue();
// console.log(quitoElemento)
// //*----------------------------------------------------------------------------------------
// //* incrementa la cantidad en size
// var arraySize = new Queue() 
// arraySize.size();
// console.log(arraySize.size());
// arraySize.enqueue(20)
// console.log(arraySize.size());
// arraySize.enqueue(20)
// console.log(arraySize.size());
// arraySize.enqueue(20)
// console.log(arraySize.size());
 
//   //*-----------------------------------------------------------------------------------------
//   //! ESTRUCTURA DE DATOS 2. Este ejercicio lo hizo mayormente el profe. me esta costando mucho manipular y entender la manipulacion de propiedades y valores ej: current.next

//   function LinkedList() {
//     this.head = null;
//   }
  
//   function Node(value) {
//     this.value = value;
//     this.next = null;
//   }
//   LinkedList.prototype.add = function(value){
//     //* armo una variable que contenga a NODE
//     var nuevoNodo = new Node(value);
//     //* digo que current ahora sea la list
//     var current = this.head;
//     //* si la lista esta vacia que aca lista es current. Digo que la lista sea nuevoNodo
//     if(current === null){
//       this.head = nuevoNodo; 
//       return value; 
//     }
//     //* si la lista no esta vacia
//     while(current.next !== null){ 
//       current = current.next; //! no tengo claro como se agregan propiedades y valores de las propiedades a los objetos 
//       //*esto es un tema de sintaxis y .next podira ser . siguiente o estoy tomando la propiedad directamente?
//     }
//     current.next = nuevoNodo; 
//     return value;
//   };
//   var miLista = new LinkedList();
  
//   miLista.add(2)
//   miLista.add(3)
//   miLista.add(4)
//   miLista.add(5)
//   console.log(miLista)

//   //----------------------------------------------------------------------------------------
//   function HashTable() {}