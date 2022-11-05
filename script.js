const btnCambio = document.getElementById('cambio');

btnCambio.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Declaramos variables o constantes en donde se almacenarán los valores obtenidos por medio del DOM

// Constante - el boton es fijo y nunca va a cambiar.
const btnNumeros = document.getElementsByName('data_number'); // DOM por medio del atributo name
const btnOperacion = document.getElementsByName('data_operation'); // DOM por medio del atributo name
const btnEqual = document.getElementsByName('data_equal')[0]; // DOM por medio del atributo name
const btnDelete = document.getElementsByName('data_delete')[0]; // DOM por medio del atributo name

// Variable - el resultado siempre va avariar dependiendo de la operacion asignada.
let resultado = document.getElementById('result') // DOM por medio del atributo ID

// Variables en el scope global
let opActual;
let opAnterior;
let operacion;

btnNumeros.forEach((boton) => {
  boton.addEventListener('click', () => {
    agregarNumero(boton.innerText);
  })
});

btnOperacion.forEach((boton) => {
  boton.addEventListener('click', () => {
    seleccionarOperacion(boton.innerText);
  })
});

btnEqual.addEventListener('click', () => {
  calcular();
  actualizarDisplay();
});

btnDelete.addEventListener('click', () => {
  clear();
  actualizarDisplay();
});

function agregarNumero(num){
  opActual = opActual + num;
  console.log(opActual)
  actualizarDisplay();
}

function seleccionarOperacion(op){
  if(opActual === ''){
    return
  } else if(opAnterior !== ''){
    calcular();
  }

  operacion = op;
  opAnterior = opActual;
  opActual = '';
}

function calcular(){
  let calculo;
  const anterior = parseFloat(opAnterior);
  const actual = parseFloat(opActual);

  if(anterior === ' ' || actual === ' ') {
    return
  }

  switch(operacion){
    case '+':
      calculo = (anterior + actual);
      break;
    case '-':
      calculo = (anterior - actual);
      break;
    case 'x':
      calculo = (anterior * actual);
      break;
    case '/':
      calculo = (anterior / actual);
      break;
    default:
      return
  }
  opActual = calculo;
  operacion = 0;
  opAnterior = '';
}

function clear(){
  opActual = '';
  opAnterior = '';
  operacion = 0;
}

function actualizarDisplay(){
  resultado.textContent = opActual;
}


clear();



// function init() {
//   //variables
//   var resultado = document.getElementById('resultado');
//   var reset = document.getElementById('reset');
//   var suma = document.getElementById('suma');
//   var resta = document.getElementById('resta');
//   var multiplicacion = document.getElementById('multiplicacion');
//   var division = document.getElementById('division');
//   var igual = document.getElementById('igual');
//   var uno = document.getElementById('uno');
//   var dos = document.getElementById('dos');
//   var tres = document.getElementById('tres');
//   var cuatro = document.getElementById('cuatro');
//   var cinco = document.getElementById('cinco');
//   var seis = document.getElementById('seis');
//   var sio = document.getElementById('ocho');
//   var nuete = document.getElementById('siete');
//   var ocheve = document.getElementById('nueve');
//   var cero = document.getElementById('cero');
// }

// //Eventos de click
// uno.onclick = function (e) {
//   resultado.textContent += "1";
// }
// dos.onclick = function (e) {
//   resultado.textContent += "2";
// }
// tres.onclick = function (e) {
//   resultado.textContent += "3";
// }
// cuatro.onclick = function (e) {
//   resultado.textContent += "4";
// }
// cinco.onclick = function (e) {
//   resultado.textContent += "5";
// }
// seis.onclick = function (e) {
//   resultado.textContent += "6";
// }
// siete.onclick = function (e) {
//   resultado.textContent += "7";
// }
// ocho.onclick = function (e) {
//   resultado.textContent += "8";
// }
// nueve.onclick = function (e) {
//   resultado.textContent += "9";
// }
// cero.onclick = function (e) {
//   resultado.textContent += "0";
// }

// reset.onclick = function (e) {
//   resetear();
// }

// suma.onclick = function (e) {
//   operandoa = resultado.textContent;
//   operacion = "+";
//   limpiar();
// }

// resta.onclick = function (e) {
//   operandoa = resultado.textContent;
//   operacion = "-";
//   limpiar();
// }

// multiplicacion.onclick = function (e) {
//   operandoa = resultado.textContent;
//   operacion = "*";
//   limpiar();
// }

// division.onclick = function (e) {
//   operandoa = resultado.textContent;
//   operacion = "/";
//   limpiar();
// }

// igual.onclick = function (e) {
//   operandob = resultado.textContent;
//   resolver();
// }

// function limpiar() {
//   resultado.textContent = "";
// }

// function resetear() {
//   resultado.textContent = "";
//   operandoa = 0;
//   operandob = 0;
//   operacion = "";
// }

// function resolver() {
//   var res = 0;
//   switch (operacion) {
//     case "+":
//       res = parseInt(operandoa) + parseInt(operandob);
//       break;

//     case "-":
//       res = parseInt(operandoa) - parseInt(operandob);
//       break;

//     case "*":
//       res = parseInt(operandoa) * parseInt(operandob);
//       break;

//     case "/":
//       res = parseInt(operandoa) / parseInt(operandob);
//       break;
//   }
//   resetear();
//   resultado.textContent = res;
// }