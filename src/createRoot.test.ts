import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";

jest.mock("react-dom/client", () => {
  const root = {
    render: jest.fn(),
  };
  return {
    __esModule: true,
    ...jest.requireActual("react-dom/client"),
    createRoot: jest.fn(() => root),
  };
});

describe("index.tsx", () => {
  it("should call createRoot and render if root element exists", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);

    expect(createRoot).toHaveBeenCalledWith(div);

    document.body.removeChild(div);
  });
});
