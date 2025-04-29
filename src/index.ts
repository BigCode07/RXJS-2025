import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.warn("Error:", error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<Number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => clearInterval(intervalID);
});

/**
 * 1- Casteo multiplie
 * 2- Tambien es un observer
 * 3- Next,Error y complete
 */
const subject$ = new Subject();
intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe((rnd) => console.log("Sub1", rnd));
const subs2 = subject$.subscribe((rnd) => console.log("Sub2", rnd));
