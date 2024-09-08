import firaCodeMedium from "./fonts/FiraCode-Medium.woff";
import logoCursosDev from "./images/logo.png";

const app = {
  async bootstrap(props) {
    console.log("styleguide iniciado", props);
  },
  async mount(props) {
    console.log("styleguide montado", props);
  },

  async unmount(props) {
    console.log("styleguide desmontado", props);
  },
};

export const Component = (rootId) => {
  const root = document.getElementById(rootId);
  const table = document.createElement("table");

  const trHeader = document.createElement("tr");
  const thId = document.createElement("th");
  thId.textContent = "ID";
  const thName = document.createElement("th");
  thName.textContent = "Name";
  const thQuantity = document.createElement("th");
  thQuantity.textContent = "Quantity";
  trHeader.appendChild(thId);
  trHeader.appendChild(thName);
  trHeader.appendChild(thQuantity);
  table.appendChild(trHeader);

  root.appendChild(table);
};

export { logoCursosDev, firaCodeMedium };

export const pathImageLogo = `http://localhost:9004${logoCursosDev}`;

export const getCurrentDateLocal = () => new Date().toLocaleDateString();

export const { bootstrap, mount, unmount } = app;
