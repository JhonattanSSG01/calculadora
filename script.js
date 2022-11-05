// El elemento document representa la página HTML, este permite el acceso a toda la información del documento.

// Declaramos variables o constantes en donde se almacenarán los valores obtenidos por medio del DOM

// Constantes - los botones de la calculadora son fijos y nunca van a cambiar.
const btnNumeros = document.getElementsByName('data_number'); // DOM por medio del atributo name
const btnOperacion = document.getElementsByName('data_operation'); // DOM por medio del atributo name
const btnEqual = document.getElementsByName('data_equal')[0]; // DOM por medio del atributo name
const btnDelete = document.getElementsByName('data_delete')[0]; // DOM por medio del atributo name

// Variable - el resultado siempre va avariar dependiendo de la operacion asignada.
let resultado = document.getElementById('result') // DOM por medio del atributo ID

// Variables en el scope global
let opActual = ''; // Se inicializa vacia
let opAnterior = '';
let operacion = 0;

// Capturando Eventos

/* Ya obteniendo los botones en un array general como lo devuelve el DOM, vamos a recorrerlo por medio
  del método forEach que nos ayuda a recorrer cada índice del array, este metodo recibe un callback 
  para poder realizar correctamente su funcion. Por el lado de addEeventListener, permite añadir una 
  escucha del evento indicado (primer parámetro) en este caso click, y en el caso de que ocurra, se ejecutará la función 
  asociada indicada (segundo parámetro) en este caso llamar una funcion y envairle un parámetro en específico. */
btnNumeros.forEach((boton) => {
  boton.addEventListener('click', () => {
    agregarNumero(boton.innerText); // Llama la función agregarNumero y se le da como parámetro el botón referenciado convertido a texto.
  })
});

btnOperacion.forEach((boton) => {
  boton.addEventListener('click', () => {
    seleccionarOperacion(boton.innerText); // Llama la función seleccionarOperacion y se le da como parámetro el botón referenciado convertido a texto.
  })
});

btnEqual.addEventListener('click', () => {
  calcular(); // Llama la función calcular ya con los números y la operación capturados.
  actualizarDisplay(); // Llama la función actualizarDisplay para ir actualizando los valores que se vayan visualizando.
});

btnDelete.addEventListener('click', () => {
  clear(); // Llama la función clear para ir limpiando o eliminando los valores que se estén visualizando.
  actualizarDisplay(); // Llama la función actualizarDisplay para ir actualizando los valores que se vayan visualizando.
});

// Funciones

/* Esta función trata en agregar los números capturados que es el parámetro que recibe y se van concatenando, ya que, 
  son cadenas de texto y no valores numéricos, lo cual se sumarian cada vez que se agregue un nuevo número.  */
function agregarNumero(num) {
  opActual = opActual + num;
  actualizarDisplay(); // Llama la función actualizarDisplay para ir actualizando los valores que se vayan visualizando.
}

/* Esta función trata en seleccionar la operación a calcular que es el parámetro que recibe, en ella se realiza una condición para evaluar si el número
  actual está vacío o no, si no hay números a calcular este devuelve vacío, pero si la operación anterior es diferente a vacío llamará a la función calcular.  */
function seleccionarOperacion(op) {
  if (opActual === '') {
    return
  } else if (opAnterior !== '') {
    calcular(); // Llama la función calcular ya con los números y la operación capturados anteriormente.
  }

  operacion = op; // Se asigna el símbolo de operación a calcular
  opAnterior = opActual; // Se asigna el número actual
  opActual = ''; // Se asigna el valor inicial

}

/* Esta función se basa en calcular los números y operación que se hayan capturado anteriormente, En ella hay una condicional en donde se 
  valida si son números o texto, si son texto no retorna vacío, pero si son números entrarían en el switch para proceder la operación dependiendo del símbolo capturado  */
function calcular() {
  let calculo; // Se declara variale en scope local
  const anterior = parseFloat(opAnterior); // Se declara constante y si le asigna el número anterior convertido a float(numero).
  const actual = parseFloat(opActual);// Se declara constante y si le asigna el número actual convertido a float(numero).

  if (anterior === ' ' || actual === ' ') {
    return
  } else {
    switch (operacion) {
      case '+':
        calculo = (anterior + actual); // Operación suma
        break;
      case '-':
        calculo = (anterior - actual); // Operación resta
        break;
      case 'x':
        calculo = (anterior * actual); // Operación multiplicar
        break;
      case '/':
        calculo = (anterior / actual); // Operación dividir
        break;
      default:
        return
    }
  }

  operacion = 0; // Se asigna el valor inicial
  opAnterior = ''; // Se asigna el valor inicial
  opActual = calculo; // Se le asigna el cálculo realizado al número actual para visualizarlo en el display
}


// Esta función se trata de limpiar pantalla para eliminar los valores que se estén visualizando cada vez que se recargue la página o se oprima la tecla C
function clear() {
  opActual = '';
  opAnterior = '';
  operacion = 0;
}

// Esta función trata de ir actualizando el display o pantalla para visualizar siempre el valor actual
function actualizarDisplay() {
  resultado.textContent = opActual; // Gracias al atributo textContent que convierte el resultado de la operación de número a texto.
}
