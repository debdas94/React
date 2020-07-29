function Button(props){
	const handleClick = ()=> props.counter(props.increment);
	return (
		<button onClick={handleClick}>
			+{props.increment}
		</button>
	);
}

//Display
function Display(props){ //can recieve props object through argument
	return (
	<div>{props.message}</div> //props object contain many values in key value pairs
	);
}

function App(){
	const [counter, setCounter] = useState(0); //make state accessible to child components by putting inside parent component
	const incrementCounter = (incrementValue) => setCounter(counter+1); //click handler function
	//pass extra value in the props object which will decide which value to increment
	return (
	
	<React.Fragment>
		<Button counter={incrementCounter} increment={1}/>
		<Display message={counter}/> 
	</React.Fragment>
	);
}

ReactDOM.render(
<App/>,
document.getElementById('mountNode'),
);