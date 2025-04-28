import { count, Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.error("error:", error),
  //No es lo mismo el complete que el unsubscribe
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<Number>((subs) => {
  //Crear un contador
  let numberCount = 0;
  const interval = setInterval(() => {
    // Cada segundo
    numberCount++;
    subs.next(numberCount);
    console.log(numberCount);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo completado");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs2.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  console.log("Completado TimeOut");
}, 6000);
