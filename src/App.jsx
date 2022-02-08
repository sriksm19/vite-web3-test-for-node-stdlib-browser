import { useEffect, useState } from 'react';
import Web3 from 'web3';
import logo from './logo.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const web3 = new Web3('https://main-light.eth.linkpool.io/');

		console.log(web3);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + Web3js + React!</p>
				<p>
					<button
						type="button"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{' | '}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
