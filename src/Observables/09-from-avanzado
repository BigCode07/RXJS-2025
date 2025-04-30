import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia de valores
 */

/**
 * from = crea un observable en base a un arreglo,array,promise,iterable,observable
 */

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

for (let id of miIterable) {
  console.log(id);
}

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source1$ = of([1, 2, 3, 4, 5]);

// const source$ = of("Nicolas");
// const source$ = from("Nicolas");

const source$ = from(fetch("https://api.github.com/users/klerith"));

// source$.subscribe(async (reps) => {
//   console.log(reps);
//   const dataResp = await reps.json();
//   console.log(dataResp);
// });

// source$.subscribe(observer);

// source$.subscribe(observer);
// source1$.subscribe(observer);
