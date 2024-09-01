import { registerApplication, start } from "single-spa";

const app = {
  async bootstrap(props) {
    console.log("mf-historia iniciado", props);
  },
  async mount(props) {
    console.log("mf-historia montado", props);

    const refContainer = document.getElementById("mf-historia");

    const h1 = document.createElement("h1");
    h1.textContent = props.titulo;

    const h2 = document.createElement("h2");
    h2.textContent = "MF Historia montado";

    refContainer.appendChild(h1);
    refContainer.appendChild(h2);
  },
  async unmount(props) {
    console.log("mf-historia desmontado", props);

    const refContainer = document.getElementById("mf-historia");
    refContainer.innerHTML = "";
  },
};

registerApplication({
  name: "mf-historia",
  app,
  activeWhen: ["/"],
  customProps: {
    nombre: "Botón javascript",
    titulo: "MFE - HISTORIA",
  },
});

start();
