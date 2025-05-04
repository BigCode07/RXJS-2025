import { distinct, from, of } from "rxjs";

const numbers$ = of(1, 1, 1, 3, 2, 2, 3, 3, 4, 5, 6, 1);

numbers$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
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

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
