var React = require('react'),
	ReactDOM = require('react-dom');
var Login = require('./components/Login.jsx');

var Butterfli = React.createClass({

	getInitialState(){
		return {
			isLoggedIn: true
		}
	},

	render: function () {

		var loginRoute = function () {
			if(this.state.isLoggedIn) {
				return (<div>Hello World, fool!</div>)
			} else if (!this.state.isLoggedIn) {
				return (<Login />)
			}
		}.bind(this)

		return (
			<div>
				{loginRoute()}
			</div>
		)
	}
});

ReactDOM.render(<Butterfli />, document.getElementById('fullContainer'));