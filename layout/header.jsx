const data = {
	title: "Sections",
	items: [
		{key: 1, text: "О нас", link: "about"},
		{key: 2, text: "Работники", link: "work"},
		{key: 3, text: "Факты", link: "facts"},
		{key: 4, text: "Связь", link: "error"}
	]
};

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const link = "#" + this.props.item.link;
		return (<li className="nav__link"><a class="nav__link__a" href={link}> {this.props.item.text} </a></li>)
	}
}

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.action = props.changeParentState;
	}

	changeState(event) {
		if (event.target.className == "nav__link__a") {
			this.action();
			event.currentTarget.className = "links off";
		}
	}

	render() {
		return [
			<div className="logo"><a href="#body">Logo</a></div>,
			<ul className={"links " + this.props.className} onClick={(event) => this.changeState(event)}>
				{
					this.props.data.items.map(function(item) {
						return <NavLink item={item} key={item.key} />
					})
				}
			</ul>
		];
	}
}

class MenuHam extends React.Component {
	constructor(props) {
		super(props);

		this.state = {active: false};
	}
	
	render() {
		return (
			<div className={"ham " + this.props.className}>
				<div className="line__1"></div>
				<div className="line__2"></div>
				<div className="line__3"></div>
			</div>
		);
	}
}

class Nav extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {active: "off"};

		this.isHamClick = (event) => {
			if (event.target.className.includes("ham") || event.target.className.includes("line"))
				return true
			else
				return false;
		}
	}

	changeState() {
		console.log("changed");
		this.setState({active: (this.state.active === "on") ? "off" : "on"});
   }

	render() {
		return (
			<nav className="nav" onClick={(event) => {
				if (this.isHamClick(event)) {
					this.changeState();
				}
			}}>
				<NavBar changeParentState={this.changeState.bind(this)} data={data} className={this.state.active} />
				<MenuHam className={this.state.active} />
			</nav>
		);
	}
}

class Header extends React.Component {
	render() {
		return (<Nav />)
	}
}

Header.defaultProps = {name: "Header"}

ReactDOM.render(
	<Header />,
	document.getElementById("header")
)