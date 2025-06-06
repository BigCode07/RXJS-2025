import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax
//   .put(
//     url,
//     {
//       id: 1,
//       nombre: "Nicolas",
//     },
//     {
//       "mi-token": "ABC123",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Nicolas",
  },
}).subscribe(console.log);
