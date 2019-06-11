import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component{
	render(){
		return (
			<div>
					<p>这是About页面</p>
					<Link to='/'>Go To Home</Link>
			</div>
		)
	}
}
export default About;
