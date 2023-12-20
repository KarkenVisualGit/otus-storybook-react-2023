import React from 'react';
import './App.css';
import { MyButton, MyInput } from 'otus-storybook-react-2023'

function App() {
	return (
		<div className="App">
			<MyButton color={'ORANGE'} big = {false} > KNOPKA </MyButton>
			<MyInput placeholder="Enter text..."
				label="Input"
				big={false}
			/>
		</div>
	);
}

export default App;
