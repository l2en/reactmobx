import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
	render(){
		return (
			<div>
					<p>首页</p>
					<Link to='/about'>Go To About</Link>
			</div>
		)
	}
}
export default Home;
