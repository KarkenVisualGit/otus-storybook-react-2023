import React from "react";
import { createRoot } from "react-dom/client";
import MyButton from "./MyButton/MyButton";
import MyInput from "./MyInput/MyInput";
import "./style/style.css";
import Header from "./Header/Header";
import { Paragraph } from "./Paragraph/Paragraph";
import { Spacer } from "./Spacer/Spacer";
// eslint-disable-next-line import/no-named-as-default
import Collapsible from "./Collapsible/Collapsible";
import Image from "./Image/Image";

export const App = () => (
  <section>
    <MyButton color="blue" big={false}>
      Нажми меня
    </MyButton>
    <MyInput placeholder="Enter text ..." label="input" big={false} />
    <Header level={1}>Title</Header>
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
    <Collapsible
      title="Нажмите, чтобы раскрыть"
      titleColor="blue"
      titleFontSize="18px"
      contentFontSize="16px"
      contentFontFamily="'Lucida Console', 'Courier New', monospace"
    >
      <p>Содержимое схлопывающегося блока</p>
    </Collapsible>
    <Image
      // eslint-disable-next-line global-require
      src={require("./images/tree_on_the_car.jpg")}
      alt="Последствие торнадо"
      width="600px"
      height="400px"
    />
  </section>
);

export const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
