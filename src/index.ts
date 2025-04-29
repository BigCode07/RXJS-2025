import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.warn("Error:", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<Number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 5000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/**
 * 1- Casteo multiplie
 * 2- Tambien es un observer
 * 3- Next,Error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe();
}, 3500);
