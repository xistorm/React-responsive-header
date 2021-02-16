class Temp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      id: this.props.name,
      className: "content " + this.props.name
    }, React.createElement("h2", null, " ", this.props.text, " "));
  }

}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "off",
      label: "Show content"
    };
    this.showContent = this.showContent.bind(this);
  }

  showContent() {
    let className = this.state.class === "off" ? "on" : "off";
    let labelText = className === "off" ? "Show content" : "Hide content";
    this.setState({
      class: className
    });
    this.setState({
      label: labelText
    });
    var components = [];
    data.items.forEach(item => {
      if (className === "on") components.push(React.createElement(Temp, {
        name: item.link,
        text: item.text
      }));else components.push(null);
    });
    ReactDOM.render(components, document.getElementById("main"));
  }

  render() {
    return React.createElement("button", {
      className: this.state.class,
      onClick: this.showContent
    }, " ", this.state.label, " ");
  }

}

Button.defaultProps = {
  name: "Button"
};
ReactDOM.render(React.createElement(Button, null), document.getElementById("app"));