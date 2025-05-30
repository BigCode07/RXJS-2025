import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");
click$
  .pipe(
    //* Es recomendable y mas eficiente primero pasar el sampletime y luego el map
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
