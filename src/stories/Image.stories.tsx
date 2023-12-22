import type { Meta, StoryObj } from "@storybook/react";
import Image from "../Image/Image";

const meta: Meta<typeof Image> = {
  title: "Example/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleImage: Story = {
  args: {
    src: require("../images/tree_on_the_car.jpg"),
    alt: "Описание изображения",
    width: "300px",
    height: "200px",
  },
};
