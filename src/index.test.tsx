import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./index";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

test("renders learn react link", async () => {
  render(<App />);
  const buttonElement = await screen.findByRole("button", {
    name: /Нажми меня/i,
  });
  expect(buttonElement).toBeInTheDocument();
});

test("renders MyInput with correct placeholder", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter text .../i);
  expect(inputElement).toBeInTheDocument();
});

test("renders Title with correct text", () => {
  render(<App />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders Paragraph with correct text and style", () => {
  render(<App />);
  const paragraphElement = screen.getByText(
    /Это пример параграфа c заданными стилями./i
  );
  expect(paragraphElement).toBeInTheDocument();
  expect(paragraphElement).toHaveClass("paragraph_element");
});

test("renders Spacer", () => {
  render(<App />);
  const hrElement = screen.getByRole("separator");
  expect(hrElement).toBeInTheDocument();
});

test("renders Collapsible with correct title", () => {
  render(<App />);
  const collapsibleTitleElement = screen.getByText(/Нажмите, чтобы раскрыть/i);
  expect(collapsibleTitleElement).toBeInTheDocument();
});

test("renders Image with correct alt text", () => {
  render(<App />);
  const imageElement = screen.getByAltText(/Последствие торнадо/i);
  expect(imageElement).toBeInTheDocument();
});

describe("Application root", () => {
  it("should mount the app to root element", () => {
    const rootElement = document.createElement("div");
    rootElement.setAttribute("id", "root");
    document.body.appendChild(rootElement);

    render(<App />, { container: rootElement });

    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});

describe("Root App Mounting", () => {
  it("renders without crashing", () => {
    const rootEl = document.createElement("div");
    rootEl.setAttribute("id", "root");
    document.body.appendChild(rootEl);

    const getElementByIdMock = jest.spyOn(document, "getElementById");
    getElementByIdMock.mockImplementation((id) =>
      id === "root" ? rootEl : null
    );

    act(() => {
      if (rootEl) {
        const root = createRoot(rootEl);
        root.render(<App />);
      }
    });
    getElementByIdMock.mockRestore();
    document.body.removeChild(rootEl);
  });
});
