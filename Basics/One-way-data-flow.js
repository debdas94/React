function Button(props){
	return (
		<button onClick={props.counter}>
			+1
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
	const incrementCounter = () => setCounter(counter+1); //click handler function
	return (
	//[<Button/>,<Display/>], can return each elemet as an array but is limited to same component
	//Introduce many elements without introducing a new DOM parent using React.fragment
	//props object message created so as data can be passed from the display component, it can aslo pass function as js functions are objects
	<React.Fragment>
		<Button counter={incrementCounter}/>
		<Display message={counter}/> 
	</React.Fragment>
	);
}

ReactDOM.render(
<App/>,
document.getElementById('mountNode'),
);