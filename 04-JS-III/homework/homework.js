// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  //1 Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  //2 Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  //3 Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  //4 "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoarray =[];
  for (i=0; i < array.length; i++)
  {
   nuevoarray[i] = array[i]+1; 
  }
  return nuevoarray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  //5 Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return  array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  //6 Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array; 
}


function dePalabrasAFrase(palabras) {
  //7 "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var  lista = '';
  for(i=0; i<palabras.length; i++)
  {
   if(i === 0)
   {
     lista = palabras[i];
   }else{
   lista = lista + ' ' + palabras[i];
   }
  }
  return lista;
}


function arrayContiene(array, elemento) {
  //8 Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i =0; i< array.length ; i++)
  {
   if(array[i] === elemento)
   {
     return true;
   } 
  }
  return false;
}


function agregarNumeros(numeros) {
  //9 "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor = 0;
  for(i=0; i< numeros.length; i++)
  {
   valor = valor + numeros[i];
  }
  return valor;
}


function promedioResultadosTest(resultadosTest) {
  //10 "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var valor = 0.000;
  for(i= 0; i<resultadosTest.length; i++)
  {
    valor = valor + resultadosTest[i];
  }
  valor = valor/resultadosTest.length;
  return valor;
}


function numeroMasGrande(numeros) {
  //11 "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var valor =numeros[0];
  for(i =0; i<numeros.length; i++)
  {
    if(valor < numeros[i])
    {
      valor = numeros[i];
    }
  }
  return valor;
}


function multiplicarArgumentos() {
  //12 Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 0 )
  {
    return 0;
  }
  if(arguments.lenght === 1)
  {
    return 1;
  }
  var j =1;
  for(i =0; i<arguments.length; i++)
  {
    j = j* arguments[i]; 
  }
  return j;
}


function cuentoElementos(arreglo){
  //13 Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var ka = 0;
  var l =0;
  ka = 0;
  for( i = 0 ; i < arreglo.lenght; i++)
  {
    if(arreglo[i] > 18)
    {
     ka = ka + 1;
    }
  }
  return ka;
}


function diaDeLaSemana(numeroDeDia) {
  //14 Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
//  for(i = 0; i < numeroDeDia.lenght; i++)
    if(numeroDeDia === 1 || numeroDeDia === 7)
    {
      return 'Es fin de semana';
    }else{
      return 'Es dia Laboral';
    }

} 


function empiezaConNueve(n) {
  //15 Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n.charAt[0] === 9)
  {
    return true;
  }else {
    return false;
  }
}


function todosIguales(arreglo) {
  //16 Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
 
 //   if(arreglo[i] !== arreglo[i+1]){
 //   return false  
 //   }
 // }
//  return true
 
 // for (var i =0 ; i < arreglo.length - 1; i++) {
    for (var i =0 ; i < arreglo.length - 1; i++){
    if(arreglo[i] !== arreglo[i+1]){
      return false
    }
  }
  return true
} 


function mesesDelAño(array) {
  //17 Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var nuevoArray = [];
  for(var i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}


function mayorACien(array) {
  //18 La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //19 Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //20 Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
