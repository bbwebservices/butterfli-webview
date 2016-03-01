var React = require('react');

var AccountHome = React.createClass({
	render(){
		return (
			<div>Sup, {this.props.username}! Account Home, fool!</div>
		)
	}
})

module.exports = AccountHome;