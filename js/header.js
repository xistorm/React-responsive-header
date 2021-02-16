const data = {
  title: "Sections",
  items: [{
    key: 1,
    text: "О нас",
    link: "about"
  }, {
    key: 2,
    text: "Работники",
    link: "work"
  }, {
    key: 3,
    text: "Факты",
    link: "facts"
  }, {
    key: 4,
    text: "Связь",
    link: "error"
  }]
};

class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const link = "#" + this.props.item.link;
    return React.createElement("li", {
      className: "nav__link"
    }, React.createElement("a", {
      "class": "nav__link__a",
      href: link
    }, " ", this.props.item.text, " "));
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
    return [React.createElement("div", {
      className: "logo"
    }, React.createElement("a", {
      href: "#body"
    }, "Logo")), React.createElement("ul", {
      className: "links " + this.props.className,
      onClick: event => this.changeState(event)
    }, this.props.data.items.map(function (item) {
      return React.createElement(NavLink, {
        item: item,
        key: item.key
      });
    }))];
  }

}

class MenuHam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return React.createElement("div", {
      className: "ham " + this.props.className
    }, React.createElement("div", {
      className: "line__1"
    }), React.createElement("div", {
      className: "line__2"
    }), React.createElement("div", {
      className: "line__3"
    }));
  }

}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "off"
    };

    this.isHamClick = event => {
      if (event.target.className.includes("ham") || event.target.className.includes("line")) return true;else return false;
    };
  }

  changeState() {
    console.log("changed");
    this.setState({
      active: this.state.active === "on" ? "off" : "on"
    });
  }

  render() {
    return React.createElement("nav", {
      className: "nav",
      onClick: event => {
        if (this.isHamClick(event)) {
          this.changeState();
        }
      }
    }, React.createElement(NavBar, {
      changeParentState: this.changeState.bind(this),
      data: data,
      className: this.state.active
    }), React.createElement(MenuHam, {
      className: this.state.active
    }));
  }

}

class Header extends React.Component {
  render() {
    return React.createElement(Nav, null);
  }

}

Header.defaultProps = {
  name: "Header"
};
ReactDOM.render(React.createElement(Header, null), document.getElementById("header"));