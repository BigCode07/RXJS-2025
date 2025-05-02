import { from, fromEvent, map, range } from "rxjs";
import { filter } from "rxjs";

//*Primer ejemplo
// range(1, 10)
//   .pipe(
//     filter((value, index) => {
//       console.log("index", index);
//       return value % 2 === 1; // Filtra los impares
//     })
//   )
//   .subscribe(console.log);

//*Segundo ejemplo
// interface Personaje {
//   tipo: String;
//   nombre: String;
// }

// const personajes: Personaje[] = [
//   {
//     tipo: "heroe",
//     nombre: "Batman",
//   },
//   {
//     tipo: "heroe",
//     nombre: "Robin",
//   },
//   {
//     tipo: "villano",
//     nombre: "Joker",
//   },
// ];

// from(personajes)
//   .pipe(filter((value) => value.tipo === "heroe"))
//   .subscribe((personajes) => console.log(personajes.nombre));

//*Tercer ejemplo
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), //keyboardEvent, string
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
