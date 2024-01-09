import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "lighthouse-ui-core-stencil",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        { src: "styles" },
        {
          src: "**/*.i18n.*json",
          dest: "assets/i18n",
        },
      ],
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      copy: [
        { src: "script.js" },
        {
          src: "**/*.i18n.*json",
          dest: "assets/i18n",
        },
      ],
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/styles/_global.scss"],
    }),
  ],
};
