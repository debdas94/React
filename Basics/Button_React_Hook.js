function Button(){
	//usestate() -- function to use state object
	const [counter, setCounter] = useState(5); //destructuring elements into variables HOOK
	//implemented transaction on javascript counter object in memeory and not UI
	return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
}
ReactDOM.render(
<Button/>,
document.getElementById('mountNode'),
);