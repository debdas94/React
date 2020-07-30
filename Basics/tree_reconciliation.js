const render  = () =>{
ReactDOM.render(
	React.createElement(
		"div",
		null,
		"Hello React",
		React.createElement('input',null), //does not throw away the DOM element everytime unlike HTML since refresh is happening
		React.createElement('br',null),
		React.createElement('pre',null,(new Date).toLocaleTimeString()), //only time is getting changed
		),
		document.getElementById('mountNode2'),
		
	);
}
setInterval(render,1000);
//react only keeps regenerating what needs to be updated while keeping everything else the same, smart diffing algorithm
//happens due to virtual DOM