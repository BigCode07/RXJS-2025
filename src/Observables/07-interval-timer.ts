import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const hoyEn5 = new Date(); // Ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(2000, 1000);
const interval$ = interval(1000);
const otherTimer$ = timer(hoyEn5);

console.log("Inicio");
// interval$.subscribe(observer);

otherTimer$.subscribe(observer);
console.log("Fin");
// const src$ = interval(2000);
// const src2$ = timer(2000);

// src$.subscribe(console.log);
// src2$.subscribe(console.log);
