var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Butterfli = require('./Butterfli.jsx');
var DashHome = require('./components/DashHome.jsx');

module.exports = [
	<Router>
		<Route path='/' component={Butterfli}>
			<IndexRoute component={Butterfli} />
			<Route path='/DashHome' component={DashHome} />
		</Route>
	</Router>
]