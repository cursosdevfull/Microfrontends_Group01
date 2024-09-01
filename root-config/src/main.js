import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";

const routes = constructRoutes(document.getElementById("single-spa-layout"));

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return Promise.resolve(window[name]);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
