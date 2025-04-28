import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]: ", value),
  error: (error) => console.warn("Error [obs]: ", error),
  complete: () => console.info("Completador [obs]"),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  const a = undefined;
  a.nombre = "Fernando";
  subs.complete();
});

// obs$.subscribe((resp) => console.log(resp));

// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("Error ", error),
//   () => console.info("Completado")
// );

obs$.subscribe(observer);
