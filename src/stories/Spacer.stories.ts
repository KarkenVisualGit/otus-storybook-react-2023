import type { Meta, StoryObj } from "@storybook/react";
import { Spacer } from "../Spacer/Spacer";

const meta: Meta<typeof Spacer> = {
  title: "Example/Spacer",
  component: Spacer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSpacer: Story = {
  args: {
    height: "10px",
    color: "blue",
  },
};
