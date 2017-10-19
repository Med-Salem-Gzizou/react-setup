var React = require('react');

module.exports = class App extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
};
