import MyButton from "./MyButton/MyButton";
import MyInput from "./MyInput/MyInput";
import React from 'react';
import { render } from 'react-dom';
import "./style/style.css";


const App = () => (
	<div>
		<MyButton color="blue" big={false}>Нажми меня</MyButton>
		<MyInput placeholder="Enter text ..." label="input" big = {false}/>
	</div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
	render(<App />, rootElement);
}

export {
	MyButton,
	MyInput
}

