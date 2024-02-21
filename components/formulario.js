function formularioComponente(el) {
  el.innerHTML = `
    <div class="cont-formulario">
    <h3 class="title-formulario">Escribime</h3>
    <form class="from" action="">
      <div class="cont__label-tex-email">
        <label class="label" for="">
          <h5 class="label-title">Nombre</h5>
          <input name="nombre" placeholder="Tu nombre" class="label-input" type="text" />
        </label>
        <label class="label" for="">
          <h5 class="label-title">Email</h5>
          <input
            placeholder="tu@mail.com"
            class="label-input"
            type="email"
            name="email"
          />
        </label>
      </div>
      <label class="label" for="">
        <h5 class="label-title">Mensaje</h5>
        <textarea name="mensaje" class="label-textarea"></textarea>
      </label>
      <div class="cont-boton__from">
        <button class="boton__from">
          Enviar <img class="img-boton" src="./svg/send.svg" alt="" />
        </button>
      </div>
    </form>
  </div>
    `;
}

function enviarFormulario() {
  const formularioEl = document.querySelector(".from");

  formularioEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = formularioEl.elements;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "marianobarrera16@gmail.com",
        message: `nombre: ${from.nombre.value}, email: ${from.email.value}, mensaje: ${from.mensaje.value}`,
      }),
    });
  });
}
