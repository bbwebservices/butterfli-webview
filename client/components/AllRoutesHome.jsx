var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

module.exports = [
	<Router>
		<Route path='/' component={CarlyBurnell}>
			<IndexRoute component={Landing} />
			<Route path='/Portfolio' component={Portfolio} />
		</Route>
	</Router>
]