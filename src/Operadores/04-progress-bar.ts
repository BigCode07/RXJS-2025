import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin eu erat auctor suscipit. Praesent sed placerat mauris. Nulla ex metus, porta ac egestas a, euismod vel turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus sem mi, ac faucibus diam bibendum a. Pellentesque commodo lacus ac scelerisque consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec et lacus egestas orci tempus rutrum ut et velit. Aliquam eu fermentum magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec porta mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas porta mauris justo, sit amet dignissim enim pharetra a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tristique facilisis sem eget iaculis.
<br/><br/>
Fusce finibus ligula et pellentesque auctor. Maecenas quis nulla eu arcu consectetur sagittis. Quisque id porta nisl. Vivamus vulputate tellus sed massa facilisis accumsan. Quisque non dui leo. Cras magna sem, tempus nec volutpat eget, vestibulum et eros. Fusce ornare, mi non dictum porta, quam dolor condimentum risus, quis congue felis nisi quis lorem. Phasellus a erat tellus.
<br/><br/>
Integer commodo risus ut quam tempor, sed bibendum felis faucibus. Duis nec risus dictum, vulputate eros eget, molestie diam. Duis posuere turpis nisi, quis iaculis lorem hendrerit finibus. Aliquam a nulla nec mi laoreet pharetra. Aenean tempus tortor ut orci posuere, non iaculis erat auctor. Nulla finibus dolor ac ante porta imperdiet. Aliquam gravida nulla eros, sed pellentesque odio tempor nec.
<br/><br/>
Sed eget eleifend odio. Phasellus efficitur gravida ex, non cursus turpis consequat ac. Donec nec suscipit enim. Curabitur tempor mi vitae nisi venenatis, at fermentum mauris aliquet. Etiam at congue justo. Ut in ornare odio, eu sagittis lacus. Nam sodales placerat justo ac rhoncus.
<br/><br/>
Aenean convallis lectus augue, id dignissim ligula imperdiet et. Cras at fermentum urna. Ut venenatis sem ac tempus commodo. Proin consequat, eros cursus ultricies imperdiet, nibh nisl varius risus, a finibus enim tortor id lacus. Nam vehicula dolor est, quis tempor elit commodo et. Praesent finibus pretium nulla, quis auctor nulla posuere a. Pellentesque dictum ligula dictum nunc maximus consectetur. Aliquam dictum sem vel nunc sagittis, sit amet rhoncus nisl eleifend. Maecenas vel pretium enim, sit amet varius turpis. Phasellus vitae turpis est. Proin commodo arcu non suscipit aliquam. Cras blandit eget nisi fermentum lacinia. Aenean bibendum mauris erat, non iaculis purus eleifend non. Aenean id dolor pharetra elit vestibulum interdum. Maecenas eu quam vel turpis convallis scelerisque ut lacinia quam. Nunc eget iaculis lorem.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, "scroll");
scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
