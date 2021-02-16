class Footer extends React.Component {
  render() {
    return React.createElement("p", null, "All rights reserved. @xistorm");
  }

}

Footer.defaultProps = {
  name: "Footer"
};
ReactDOM.render(React.createElement(Footer, null), document.getElementById("footer"));