import { getUsageMedicineByHistoryId } from "mf_historias";

const app = {
  async bootstrap(props) {
    console.log("mf-almacen iniciado", props);
  },
  async mount(props) {
    console.log("mf-almacen montado", props);

    const refContainer = document.getElementById(
      "single-spa-application:mf_almacen"
    );

    const h1 = document.createElement("h1");
    h1.textContent = props.titulo;

    const h2 = document.createElement("h2");
    h2.textContent = "MF Almacen montado";

    refContainer.appendChild(h1);
    refContainer.appendChild(h2);

    const medicines = getUsageMedicineByHistoryId();

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

    for (const medicine of medicines) {
      const trData = document.createElement("tr");
      const tdId = document.createElement("th");
      tdId.textContent = medicine.medicineId;
      const tdName = document.createElement("th");
      tdName.textContent = medicine.name;
      const tdQuantity = document.createElement("th");
      tdQuantity.textContent = medicine.quantity;
      trData.appendChild(tdId);
      trData.appendChild(tdName);
      trData.appendChild(tdQuantity);

      table.appendChild(trData);
    }

    refContainer.appendChild(table);
  },
  async unmount(props) {
    console.log("mf-almacen desmontado", props);

    const refContainer = document.getElementById(
      "single-spa-application:mf_almacen"
    );
    refContainer.innerHTML = "";
  },
};

export const { bootstrap, mount, unmount } = app;
