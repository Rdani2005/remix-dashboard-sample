import { Alert } from "./Alert";
import { Meta, StoryObj } from "@storybook/react";

type AlertMeta = Meta<typeof Alert>;
type AlertStory = StoryObj<AlertMeta>;

export default {
    title: "Example/Alert",
    component: Alert,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    args: {
        color: "primary",
        description: "This is a primary alert",
        title: "Primary Alert",
    },
    argTypes: {
        color: {
            defaultValue: "primary",
            description: "The color of the button",
        },
    },
} satisfies AlertMeta;

export const Primary = {
    args: {
        color: "primary",
        description: "This is a primary alert",
        title: "Primary Alert",
    },
} satisfies AlertStory;

export const Secondary = {
    args: {
        color: "secondary",
        description: "This is a secondary alert",
        title: "Secondary Alert",
    },
} satisfies AlertStory;
