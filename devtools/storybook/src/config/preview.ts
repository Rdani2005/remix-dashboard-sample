import { type Preview } from "@storybook/react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "@dashboard-sample/styles/src/fonticon/fonticon.css";
import "@dashboard-sample/styles/src/keenicons/duotone/style.css";
import "@dashboard-sample/styles/src/keenicons/outline/style.css";
import "@dashboard-sample/styles/src/keenicons/solid/style.css";

import "@dashboard-sample/styles/src/sass/style.scss";
import "@dashboard-sample/styles/src/sass/plugins.scss";
import "@dashboard-sample/styles/src/sass/style.react.scss";

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /date$/i,
            },
        },
    },
} satisfies Preview;

export default preview;
