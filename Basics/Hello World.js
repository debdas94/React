function Hello() {
	//JSX used by babel compiler to convert JSX into native react
  return <div>Hello World!</div>;
	//REACT
	//return React.createElement('div',null,'Hello World!');
}

//to display a react component in a browser we need to instruct the react DOM library on how to do that
ReactDOM.render(
//JSX
	<Hello/>,
//REACT
//React.createElement(Hello,null),
	document.getElementById('mountNode'),
);