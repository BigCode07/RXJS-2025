import { distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Dr.Willy",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Dr.Willy",
  },
  {
    nombre: "Megaman",
  },
];

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
