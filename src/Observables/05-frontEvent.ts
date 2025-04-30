import { fromEvent } from "rxjs";

/**
 * Evento del DOM
 */

// con este observable logramos leer lo que hay dentro del evento pointer
const src1$ = fromEvent<PointerEvent>(document, "click");
// con este observable logramos leer lo que hay dentro del evento keyboard
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};

// En esta propiedad lo que hace es saber la posicion cuando se hace click en pantalla
src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});

// En esta propiedad lo que hace es saber que tecla fue presionada
src2$.subscribe((evento) => {
  console.log(evento.key);
});
