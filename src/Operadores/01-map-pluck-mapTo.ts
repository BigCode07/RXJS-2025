import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

//el range lo que hace es traerme un contador del 1 al 5
//.pipe toma un flujo de datos (observable) y le aplica una o mas funciones
//map toma cada valor del flujo y lo modifica o convierte segun una funcion que yo quiera
//<metodo de entrada:number,metodo de salida:string>
//.subscribe es el metodo que se usa para ejecutar un observable

//*Primer ejemplo
// range(1, 5)
//   .pipe(map<number, string>((value) => (value * 10).toString()))
//   .subscribe(console.log);

//*Segundo ejemplo
// const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
// const keyupCode$ = keyup$.pipe(map((event) => event.code));
// const keyupPluck$ = keyup$.pipe(map((event) => event.key));
// keyupCode$.subscribe((code) => console.log("map", code));
// keyupPluck$.subscribe((code) => console.log("pluck", code));

//*Tercer ejemplo
// const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
// const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada"));
// keyupMapTo$.subscribe(console.log);
