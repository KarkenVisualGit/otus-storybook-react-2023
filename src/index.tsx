import React from "react";
import { createRoot } from "react-dom/client";
import MyButton from "./MyButton/MyButton";
import MyInput from "./MyInput/MyInput";
import "./style/style.css";
import TodoList from "./Todo/TodoList";
import Title from "./Header/Header";
import { Paragraph } from "./Paragraph/Paragraph";
import { Spacer } from "./Spacer/Spacer";

export const App = () => (
  <div>
    <MyButton color="blue" big={false}>
      Нажми меня
    </MyButton>
    <MyInput placeholder="Enter text ..." label="input" big={false} />
    <TodoList></TodoList>
    <Title level={1}>Title</Title>
    <Paragraph
      fontSize="16px"
      fontWeight="bold"
      textAlign="center"
      color="gray"
      className="paragraph_element"
      fontFamily="'Lucida Console', 'Courier New', monospace"
    >
      Это пример параграфа c заданными стилями.
    </Paragraph>
    <Spacer height="10px" color="Tomato" />
  </div>
);

export const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
