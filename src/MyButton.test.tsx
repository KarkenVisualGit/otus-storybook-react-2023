import React from "react";
import { render, screen } from "@testing-library/react";
import MyButton from "./MyButton/MyButton";
import "@testing-library/jest-dom";

describe("MyButton Component", () => {
  test('includes "big-btn" class when big is true', () => {
    render(
      <MyButton color="red" big>
        Big Button
      </MyButton>
    );

    const button = screen.getByRole("button", { name: /big button/i });
    expect(button).toHaveClass("big-btn");
  });

  test('does not include "big-btn" class when big is false or not provided', () => {
    render(<MyButton color="red">Normal Button</MyButton>);

    const button = screen.getByRole("button", { name: /normal button/i });
    expect(button).not.toHaveClass("big-btn");
  });
});
