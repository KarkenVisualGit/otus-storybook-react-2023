import type { Meta, StoryObj } from "@storybook/react";

import MyButton from "../MyButton/MyButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: MyButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedButton: Story = {
  args: {
    color: "red",
    children: "Button",
  },
};

export const OrangeBtn: Story = {
  args: {
    color: "orange",
    children: "Button",
  },
};

export const BigBtn: Story = {
  args: {
    color: "orange",
    big: true,
    children: "Button",
  },
};
