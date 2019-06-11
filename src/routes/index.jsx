import React from './node_modules/react';
import { BrowserRouter as Router, Route } from './node_modules/react-router-dom';
import Home from './node_modules/pages/home';
import About from './node_modules/pages/about';

const Routes = () =>{
	<Router>
		<div>
			<Route exact path = '/' component={Home}/>
			<Route  path = '/about' component={About}/>
		</div>
	</Router>
}

export default Routes;
