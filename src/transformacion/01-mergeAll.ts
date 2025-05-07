import { mergeAll, pluck } from "rxjs/operators";
import { debounceTime, fromEvent, map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

//Referencicas
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

//Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = "";

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver pagina";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// input$
//   .pipe(
//     debounceTime<KeyboardEvent>(500),
//     // pluck<KeyboardEvent, string>("target", "value"),
//     map<KeyboardEvent, string>((evento) => evento.target["value"]),
//     map<string, Observable<GithubUsersResp>>((texto) =>
//       ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
//     ),
//     mergeAll(),
//     pluck("items")
//   )
//   .subscribe((users) => {
//     console.log(users);
//   });

//   .subscribe((resp) => {
//     resp.pipe(pluck("url")).subscribe(console.log);
//   });
input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    map<string, Observable<GithubUsersResp>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>((item) => item.items)
  )
  .subscribe(mostrarUsuarios);
