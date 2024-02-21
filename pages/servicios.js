const getServiciosBienvenida = () => {
  const templateBienvenida = document.querySelector(".template-bienvenida");
  const contenedorBienvenida = document.querySelector(".bienvenida");
  fetch(
    "https://preview.contentful.com/spaces/wxuiln3gkegf/environments/master/entries?access_token=aHSwRSLeqMjuEYDevw2qcG3Ik0kaeEna5iPrbXVxrUg&content_type=serviciosBienvenida"
  )
    .then((res) => res.json())
    .then((bien) => {
      bien.items.map((item) => {
        console.log(item.fields);
        const titleEl = templateBienvenida.content.querySelector(
          ".title-hola__bienvenida"
        );
        titleEl.textContent = item.fields.titulo;

        const tituloSecundarioEl = templateBienvenida.content.querySelector(
          ".title-marce__bienvenida"
        );
        tituloSecundarioEl.textContent = item.fields.tituloSecundario;

        const imgEl =
          templateBienvenida.content.querySelector(".img-bienvenida");
        imgEl.src = bien.includes.Asset.map((i) => i.fields.file.url);

        const clone = document.importNode(templateBienvenida.content, true);
        contenedorBienvenida.appendChild(clone);
      });
    });
};

const getContentServicios = () => {
  const templateServicios = document.querySelector(".servicios-template");
  const contenedorServicios = document.querySelector(".cont__mis-servicios");
  fetch(
    "https://preview.contentful.com/spaces/wxuiln3gkegf/environments/master/entries?access_token=aHSwRSLeqMjuEYDevw2qcG3Ik0kaeEna5iPrbXVxrUg&content_type=serviciosSeccion"
  )
    .then((res) => res.json())
    .then((ser) => {
      let contador = 0;
      const imagenes = ser.includes.Asset.map((i) => i.fields.file.url);
      ser.items.map((res) => {
        const tituloEl =
          templateServicios.content.querySelector(".title-servicio");
        tituloEl.textContent = res.fields.titulo;

        const descripcionEl =
          templateServicios.content.querySelector(".text-servicio");
        descripcionEl.textContent =
          res.fields.descripcin.content[0].content[0].value;

        const imgEl = templateServicios.content.querySelector(".img-servicio");
        imgEl.src = imagenes[contador];
        contador++;

        const clone = document.importNode(templateServicios.content, true);
        contenedorServicios.appendChild(clone);
      });
    });
};

(function () {
  const headerEl = document.querySelector(".header");
  const footerEl = document.querySelector(".footer");

  headerComponentes(headerEl);
  abrirCerrarVentana();

  footerComponente(footerEl);

  getServiciosBienvenida();
  getContentServicios();
})();
