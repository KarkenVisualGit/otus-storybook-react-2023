import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from "../Collapsible/Collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "Example/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCollapsible: Story = {
  args: {
    title: "Нажмите, чтобы раскрыть",
    children: <p>Содержимое схлопывающегося блока</p>,
  },
};

export const CustomStyledCollapsible: Story = {
  args: {
    title: "Нажмите для стилизованного заголовка",
    titleColor: "red",
    titleFontSize: "20px",
    contentFontSize: "16px",
    contentFontFamily: "'Lucida Console', 'Courier New', monospace",
    children: (
      <p>Содержимое схлопывающегося блока c настроенным стилем заголовка</p>
    ),
  },
};
