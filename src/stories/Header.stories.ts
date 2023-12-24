import type { Meta, StoryObj } from "@storybook/react";
// eslint-disable-next-line import/no-named-as-default
import Title from "../Header/Header";

const meta = {
  title: "Example/Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstLevelTitle: Story = {
  args: {
    level: 1,
    children: "Заголовок первого уровня",
  },
};

export const SecondLevelTitle: Story = {
  args: {
    level: 2,
    children: "Заголовок второго уровня",
  },
};
