import ufo from "../img/ufo.jpg";
import style from "./Page404.module.css";

function Page404() {
  return (
    <body>
      <main className={style.container}>
        <div className={style.containerBody}>
          <h1 className={style.title}>404</h1>
          <p className={style.text}>Page not found</p>
          <a className={style.goHome} href="/">Go to home</a>
        </div>
        <img className={style.logo} src={ufo} alt="Ufo lekste kuria vagia daiktus" />
      </main>
    </body>
  );
}

export { Page404 };