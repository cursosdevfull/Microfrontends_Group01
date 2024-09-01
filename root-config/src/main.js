import { registerApplication, start } from "single-spa";

registerApplication({
  name: "mf-almacen",
  app: window.mf_almacen,
  activeWhen: ["/"],
  customProps: {
    titulo: "MFE ALMACEN",
  },
});

registerApplication({
  name: "mf-historias",
  app: window.mf_historias,
  activeWhen: ["/"],
  customProps: {
    titulo: "MFE HISTORIAS",
  },
});

registerApplication({
  name: "mf-inventario",
  app: window.mf_inventario,
  activeWhen: ["/"],
  customProps: {
    titulo: "MFE INVENTARIO",
  },
});

start();
