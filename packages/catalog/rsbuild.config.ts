import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  output: {
    sourceMap: {
      js: "source-map",
    },
  },
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
    alias: {
      "@services": "./src/services",
      "@utilities": "./src/utilities",
    },
  },
  html: {
    favicon: "./src/assets/favicon.png",
    title: "Catalog MFE",
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_DSN_CATALOG,
            release,
          }),
        }),
      ],
    },
  },
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "catalog",
      filename: "remoteEntry.js",
      exposes: {
        "./CatalogList": "./src/scenes/CatalogList/index.ts",
        "./Filter": "./src/scenes/Filter/index.ts",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
      },
    },
  }
});
