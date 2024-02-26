import { join, dirname } from "node:path";
import { type StorybookConfig } from "@storybook/react-vite";

const STORYBOOK_PACKAGE_ROOT = "../..";

/**
 * Resolve the absolute path of a package.
 * @param pkg name of a package located in node_modules or a path that contains a package.json.
 * @returns the absolute path to the provided package.
 * @remarks this function is needed to load storybook addons in projects that are set up within a monorepo.
 */
function getAbsolutePathFor(pkg: string) {
    // We need to use require to take advantage of the node resolution algorithm
    // to resolve the correct absolute path.
    // eslint-disable-next-line unicorn/prefer-module

    return dirname(require.resolve(join(pkg, "package.json")));
}

/**
 * Returns an array with globs that storybook can use to look for stories in the provided package.
 * @param pkg name of a package located in node_modules or a path that contains a package.json.
 * @returns an array of globs to look for stories.
 * @remarks the the globs match `*.mdx` and `*.stories.@(js|jsx|mjs|ts|tsx)` inside the provided package.
 */
function getStoriesSourceFrom(pkg: string) {
    return [
        join(getAbsolutePathFor(pkg), "**/*.mdx"),
        join(getAbsolutePathFor(pkg), "**/*.stories.@(js|jsx|mjs|ts|tsx)"),
    ];
}

/**
 * Returns a glob that matches react components inside the provided package.
 * @param pkg name of a package located in node_modules or a path that contains a package.json.
 * @returns a glob intended to be processed by docgen.
 * @remarks the the glob matches `*.tsx` inside the `src` directory of the provided package.
 */
function getGlobForDocgenFrom(pkg: string) {
    return join(getAbsolutePathFor(pkg), "src/**/*.tsx");
}

const config = {
    core: {
        disableTelemetry: true,
    },
    stories: [
        ...getStoriesSourceFrom(STORYBOOK_PACKAGE_ROOT),
        // ! This line is commented out to avoid loading the stories from the ui package. This should be uncommented when discover how to solve the src/config error.
        // ! ERROR adding src/config before every path
        // ...getStoriesSourceFrom("@dashboard-sample/ui"),
        "../../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)", // ? This line is added to load the stories from the ui package. Is a temporary solution.
    ],
    addons: [
        getAbsolutePathFor("@storybook/addon-links"),
        getAbsolutePathFor("@storybook/addon-essentials"),
        getAbsolutePathFor("@storybook/addon-interactions"),
    ],
    framework: {
        // The type expects the literal `@storybook/react-vite`,
        // but the function `getAbsolutePath` returns a string.
        // @ts-expect-error
        name: getAbsolutePathFor("@storybook/react-vite"),
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldRemoveUndefinedFromOptional: true,
            include: [
                getGlobForDocgenFrom(STORYBOOK_PACKAGE_ROOT),
                getGlobForDocgenFrom("@dashboard-sample/ui"),
            ],
        },
    },
} satisfies StorybookConfig;
export default config;
