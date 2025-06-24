import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-mu2",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
    ssr:{
      noExternal: [/@syncfusion/]
    }
  };
});
