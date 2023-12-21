import type { Meta, StoryObj } from "@storybook/react";

import MyInput from "../MyInput/MyInput";

const meta = {
  title: "Example/Input",
  component: MyInput,
  tags: ["autodocs"],
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter text...",
    big: false,
  },
};

export const BigInput: Story = {
  args: {
    label: "Big Input",
    placeholder: "Enter text...",
    big: true,
  },
};
