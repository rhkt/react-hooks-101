import React, { useState } from "react";
const App = () => {
	const [count, setCount] = useState(0);
	console.log(typeof setCount);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	const increment2 = () => setCount((previousCount) => previousCount + 1);
	const decrement2 = () => setCount((previousCount) => previousCount - 1);
	const reset = () => {
		setCount(0);
	};
	const double = () => {
		setCount((previousCount) => {
			return previousCount * 2;
		});
	};
	const divide3 = () => {
		if (count % 3 === 0) {
			setCount(count / 3);
		}
	};
	return (
		<>
			<div>count:{count}</div>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
			<div></div>
			<button onClick={increment2}>+1</button>
			<button onClick={decrement2}>-1</button>
			<div></div>
			<button onClick={reset}>RESET</button>
			<button onClick={double}>x2</button>
			<button onClick={divide3}>3の倍数だけ３で割る</button>
		</>
	);
};

export default App;
