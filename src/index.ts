import { count, Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.error("error:", error),
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

  return () => {
    clearInterval(interval);
    console.log("Intervalo completado");
  };
});

const subscription = intervalo$.subscribe();
const subscription2 = intervalo$.subscribe();
const subscription3 = intervalo$.subscribe();

setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe();

  console.log("Completado TimeOut");
}, 3000);
