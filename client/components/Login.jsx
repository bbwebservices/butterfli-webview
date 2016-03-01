var React = require('react');

var Login = React.createClass({
	render(){
		return (
			<div className="uk-vertical-align-middle" style={styles.formContainer}>
				<h1>butterfli.</h1>
				<form className="uk-panel uk-panel-box uk-form">
					
					<div className="uk-form-row">
						<input ref="username" type="text" placeholder="Username" />
					</div>
					<div className="uk-form-row">
						<input ref="password" type="text" placeholder="Password" />
					</div>
					<div className="uk-form-row">
						<a onClick={function(){this.props.updateCreds(this.refs.username.value, this.refs.password.value)}.bind(this)} className="uk-width-1-1 uk-button uk-button-primary uk-button-large"></a>
					</div>
					<div className="uk-form-row"></div>

				</form>

			</div>
		)
	}
});

var styles = {
	formContainer: {
		width: 250
	}
}

module.exports = Login;