#!/usr/bin/env node

const prompts = require("prompts");
prompts.override(require("yargs").argv);

const { spawn } = require("node:child_process");

const apps = {
  "mf-almacen": 9001,
  "mf-historias": 9002,
  "mf-reportes": 9005,
};

(async () => {
  const { selected } = await prompts({
    type: "multiselect",
    name: "selected",
    message: "Elija que mfe's cargar",
    choices: Object.entries(apps).map(([appName, appPort]) => ({
      title: `${appName} (Port: ${appPort})`,
      value: appName,
    })),
    instructions: false,
    hint: "Seleccione usando la barra espaciadora y la tecla Enter",
  });

  if (Array.isArray(selected) && selected.length === 0) {
    console.log("Debe seleccionar al menos un mfe");
    process.exit(1);
  }

  const startProcesses = spawn(
    /^win/.test(process.platform) ? "lerna.cmd" : "lerna",
    [
      "run",
      "start",
      "--scope",
      `*/*{root-config,mf-menu,${selected.join(",")}}*`,
      "--stream",
      "--parallel",
    ],
    {
      stdio: "inherit",
      env: {
        ...process.env,
        FEATURE_APP_DATA: JSON.stringify(
          Object.fromEntries(
            selected.map((appName) => [appName, apps[appName]])
          )
        ),
      },
    }
  );
})();
