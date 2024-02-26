import { StoryObj, type Meta } from "@storybook/react";
import { Button } from "./Button";
type ButtonMeta = Meta<typeof Button>;
type ButtonStory = StoryObj<ButtonMeta>;

export default {
    title: "Example/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    args: {
        color: "primary",
        label: "Button",
        outline: false,
    },
    argTypes: {
        color: {
            defaultValue: "primary",
            description: "The color of the button",
        },
    },
} satisfies ButtonMeta;

export const Primary = {
    args: {
        color: "primary",
    },
} satisfies ButtonStory;

export const Secondary = {
    args: {
        color: "secondary",
    },
} satisfies ButtonStory;
