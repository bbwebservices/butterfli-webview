var React = require('react'),
	ReactDOM = require('react-dom');

var CarlyBurnell = React.createClass({
	render: function () {
		return (
			<div>Hello World!</div>
		)
	}
});

ReactDOM.render(<CarlyBurnell />, document.getElementById('fullContainer'));