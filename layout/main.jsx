class Temp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div id={this.props.name} className={"content " + this.props.name}><h2> {this.props.text} </h2></div>)
	}
}

class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {class: "off", label: "Show content"}
		this.showContent = this.showContent.bind(this);
	}

	showContent() {
		let className = (this.state.class === "off") ? "on" : "off";
		let labelText = (className === "off") ? "Show content" : "Hide content";
		this.setState({class: className});
		this.setState({label: labelText});

		var components = [];
		data.items.forEach(item => {
			if (className === "on")
				components.push(<Temp name={item.link} text = {item.text} />);
			else
				components.push(null);
		});

		ReactDOM.render(
			components,
			document.getElementById("main")
		);
	}

	render() {
		return <button className = {this.state.class} onClick = {this.showContent}> {this.state.label} </button>
	}
}
Button.defaultProps = {name: "Button"};
ReactDOM.render(
	<Button />,
	document.getElementById("app")
)	