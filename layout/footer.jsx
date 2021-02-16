class Footer extends React.Component {
	render() {
		return (<p>All rights reserved. @xistorm</p>)
	}
}
Footer.defaultProps = {name: "Footer"}
ReactDOM.render(
	<Footer />,
	document.getElementById("footer")
)