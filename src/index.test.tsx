import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./index";
import "@testing-library/jest-dom";

test("renders learn react link", async () => {
  render(<App />);
  const buttonElement = await screen.findByRole("button", {
    name: /Нажми меня/i,
  });
  expect(buttonElement).toBeInTheDocument();
});
