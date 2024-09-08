import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";

const routes = constructRoutes(document.getElementById("single-spa-layout"));

const applications = constructApplications({
  routes,
  async loadApp({ name }) {
    console.log("name", name);
    try {
      return await System.import(name);
    } catch (error) {
      console.log(`Error al cargar el mfe ${name}`, error);
    }
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
