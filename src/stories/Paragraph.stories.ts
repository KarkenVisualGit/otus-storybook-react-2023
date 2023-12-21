import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "../Paragraph/Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Example/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultParagraph: Story = {
  args: {
    children: "Это стандартный параграф.",
  },
};

export const BoldParagraph: Story = {
  args: {
    fontWeight: "bold",
    children: "Это жирный параграф.",
  },
};

export const ColoredParagraph: Story = {
  args: {
    color: "blue",
    children: "Это синий параграф.",
  },
};

export const CustomStyleParagraph: Story = {
  args: {
    fontSize: "20px",
    textAlign: "center",
    children: "Это параграф c настраиваемым стилем.",
  },
};
