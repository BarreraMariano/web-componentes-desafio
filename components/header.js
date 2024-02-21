function headerComponentes(el) {
  el.innerHTML = `
  <div class="cont-header">
        <img
          class="header__logo"
          src="./img/73a49defaf324768a8445cd8e0099d9a (1).png"
        />

        <button class="header__burger-boton">
          <img
            class="header__burger-logo"
            src="./svg/menu-svgrepo-com 1.svg"
            alt=""
          />
        </button>
        <nav class="nav__header">
          <a target="_blank" class="link-nav__header" href="./index.html">Home</a>
          <a target="_blank" class="link-nav__header" href="./servicios.html">Servicios</a>
          <a target="_blank" class="link-nav__header" href="./contacto.html">Contacto</a>
        </nav>
      </div>
      <div class="ventana">
        <button class="boton--cerrar-vent">
          <img src="./svg/close-svgrepo-com (1) 1.svg" alt="" />
        </button>

        <nav class="nav__ventana">
          <a target="_blank" class="link-nav" href="./index.html">Home</a>
          <a target="_blank" class="link-nav" href="./servicios.html">Servicios</a>
          <a target="_blank" class="link-nav" href="./contacto.html">Contacto</a>
        </nav>
      </div>

    `;
}

function abrirCerrarVentana() {
  const botonAbreVentana = document.querySelector(".header__burger-boton");
  const botonCerrarVentana = document.querySelector(".boton--cerrar-vent");
  const ventanaEl = document.querySelector(".ventana");

  botonAbreVentana.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  botonCerrarVentana.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
