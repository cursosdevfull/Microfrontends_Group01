const app = {
  async bootstrap(props) {
    console.log("mf-historia iniciado", props);
  },
  async mount(props) {
    console.log("mf-historia montado", props);

    const refContainer = document.getElementById(
      "single-spa-application:mf_historias"
    );

    const h1 = document.createElement("h1");
    h1.textContent = props.titulo;

    const h2 = document.createElement("h2");
    h2.textContent = "MF Historia montado";

    refContainer.appendChild(h1);
    refContainer.appendChild(h2);
  },
  async unmount(props) {
    console.log("mf-historia desmontado", props);

    const refContainer = document.getElementById(
      "single-spa-application:mf_historias"
    );
    refContainer.innerHTML = "";
  },
};

export const getUsageMedicineByHistoryId = (id) => {
  return [
    {
      medicineId: 1,
      name: "Medicine 1",
      quantity: Math.ceil(Math.random() * 10 + 1),
    },
    {
      medicineId: 2,
      name: "Medicine 2",
      quantity: Math.ceil(Math.random() * 10 + 1),
    },
    {
      medicineId: 3,
      name: "Medicine 3",
      quantity: Math.ceil(Math.random() * 10 + 1),
    },
    {
      medicineId: 4,
      name: "Medicine 4",
      quantity: Math.ceil(Math.random() * 10 + 1),
    },
    {
      medicineId: 5,
      name: "Medicine 5",
      quantity: Math.ceil(Math.random() * 10 + 1),
    },
  ];
};

export const { bootstrap, mount, unmount } = app;
