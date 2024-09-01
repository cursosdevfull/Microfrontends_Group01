window.mf_almacen = {
  async bootstrap(props) {
    console.log("mf-almacen iniciado", props);
  },
  async mount(props) {
    console.log("mf-almacen montado", props);

    const refContainer = document.getElementById("mf-almacen");

    const h1 = document.createElement("h1");
    h1.textContent = props.titulo;

    const h2 = document.createElement("h2");
    h2.textContent = "MF Almacen montado";

    refContainer.appendChild(h1);
    refContainer.appendChild(h2);
  },
  async unmount(props) {
    console.log("mf-almacen desmontado", props);

    const refContainer = document.getElementById("mf-almacen");
    refContainer.innerHTML = "";
  },
};
