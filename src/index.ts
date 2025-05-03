import { from, map, reduce, scan } from "rxjs";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  {
    id: "Niholas",
    autenticado: false,
    token: null,
  },
  {
    id: "Franco",
    autenticado: true,
    token: "ABC",
  },
  {
    id: "Mario",
    autenticado: true,
    token: "ABC123",
  },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>((acc: Usuario, cur: Usuario) => {
    return { ...acc, ...cur };
  }, user[0])
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
