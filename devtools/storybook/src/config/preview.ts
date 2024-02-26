import { type Preview } from "@storybook/react";

import "@dashboard-sample/styles/src/_init.scss";
import "@dashboard-sample/styles/src/plugins.scss";
import "@dashboard-sample/styles/src/style.react.scss";
import "@dashboard-sample/styles/src/style.scss";

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
