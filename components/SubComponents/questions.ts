import { ref } from "vue";
import type { questionsType } from "../types/types";

export function useQuestions() {
  const questions = ref<questionsType[]>([
    {
      question: "Crea una funcion de JS que use un async await",
      reply: "",
      content: `Una función async en JavaScript define una función asíncrona que devuelve un Promise. Dentro de esta, se puede usar await para pausar la ejecución hasta que un Promise se resuelva. Esto simplifica la gestión de promesas, permitiendo escribir código asíncrono que se lee de manera similar al código síncrono. La función async devuelve un valor que se resuelve automáticamente en una Promise, y si lanza una excepción, la Promise se rechaza. Usar async/await es útil para manejar flujos asíncronos de manera más clara y concisa.`,
    },
    {
      question: "Utiliza el metodo setTimout en JS",
      reply: "",
      content: `El método setTimeout() establece un temporizador que ejecuta una función o un código específico después de un periodo de tiempo determinado. La sintaxis básica incluye setTimeout(functionRef, delay, ...params) donde functionRef es la función a ejecutar, delay es el tiempo en milisegundos antes de la ejecución, y params son argumentos opcionales para la función. Devuelve un timeoutID que puede ser usado con clearTimeout() para cancelar el temporizador. setTimeout es asíncrono y no bloquea la ejecución del resto del código. El uso de cadenas como code para setTimeout es desaconsejado por razones de seguridad.`,
    },
    {
      question: "usa el metodo .map() en JS",
      reply: "",
      content: `El método .map() crea un nuevo array con los resultados de aplicar una función a cada uno de sus elementos. La sintaxis es arr.map(callback[, thisArg]), donde callback es una función que recibe el valor actual, el índice y el array original, y thisArg es opcional y se usa como this en el callback. map no modifica el array original y solo invoca el callback para índices con valores asignados. Ejemplos incluyen usar map para calcular raíces cuadradas, duplicar números, o convertir caracteres a sus valores ASCII. Evitar usar map con funciones que acepten más de un argumento opcional para evitar confusiones.`,
    },
  ]);

  return {
    questions,
    length: questions.value.length,
  };
}
