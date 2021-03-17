import React, { useState } from 'react';
import App from './App'

function App2() {

	const [dashes, setDashes] = useState(1);

	const addDashes = () => {
		setDashes(nextDash => nextDash + 1);
/* 		console.log(dashes)
 */		
  }

	return (
		<>
		<h1>FE2 T3 - ToDo App</h1>
		<div id="container">

			{Array(dashes).fill(1).map((item,index) => (
				<App key={index} unique={index}/>
			))}

			<button id="new-dashboard" onClick={addDashes}>+ Create dashboard</button>
		</div>
		</>
	)
}

export default App2;
