import React from "react";
import { createRoot } from "react-dom/client";
import MyButton from "./MyButton/MyButton";
import MyInput from "./MyInput/MyInput";
import "./style/style.css";

export const App = () => (
  <div>
    <MyButton color="blue" big={false}>
      Нажми меня
    </MyButton>
    <MyInput placeholder="Enter text ..." label="input" big={false} />
  </div>
);

export const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export { MyButton, MyInput };
