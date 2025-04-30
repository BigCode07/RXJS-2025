import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log("Hola Mundo");
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 2000);
// En este caso lo que genera esta linea de codigo es llamar a la constante saludar que
// se muestre en 2000 segundo y la variable nombre es donde se asigna el "Nicolas"
// asyncScheduler.schedule(saludar2, 2000, "Nicolas");

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

setTimeout(() => {
  subs.unsubscribe();
}, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
