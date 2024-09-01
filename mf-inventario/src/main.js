import { registerApplication, start } from "single-spa";

const app = {
  async bootstrap(props) {
    console.log("mf-inventario iniciado", props);
  },
  async mount(props) {
    console.log("mf-inventario montado", props);

    const refContainer = document.getElementById("mf-inventario");

    const h1 = document.createElement("h1");
    h1.textContent = props.titulo;

    const h2 = document.createElement("h2");
    h2.textContent = "MF Inventario montado";

    refContainer.appendChild(h1);
    refContainer.appendChild(h2);
  },
  async unmount(props) {
    console.log("mf-inventario desmontado", props);

    const refContainer = document.getElementById("mf-inventario");
    refContainer.innerHTML = "";
  },
};

registerApplication({
  name: "mf-inventario",
  app,
  activeWhen: ["/"],
  customProps: {
    nombre: "Botón javascript",
    titulo: "MFE - INVENTARIO",
  },
});

start();
