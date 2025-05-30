import { catchError, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then((resp) => resp.json())
//   .then((data) => console.log("data", data))
//   .catch((err) => console.warn("Error en usuario", err));

// fetchPromesa
//   .then(manejaErrores)
//   .then((resp) => resp.json())
//   .then((data) => console.log("data", data))
//   .catch((err) => console.warn("Error en usuario", err));

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError((err) => {
      console.warn("error en:", err);
      return of([]);
    })
  )
  .subscribe((users) => console.log("usuarios", users));
