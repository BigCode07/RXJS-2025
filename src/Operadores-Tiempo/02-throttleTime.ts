import { distinctUntilChanged, throttleTime } from "rxjs/operators";
import { asyncScheduler, fromEvent, map } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    map((event) => (event.target as HTMLInputElement).value),
    distinctUntilChanged()
  )
  .subscribe(console.log);
