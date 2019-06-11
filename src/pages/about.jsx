import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('aboutStore')
@observer
class About extends Component{
	render(){
		return (
			<div>
					<p>{this.props.aboutStore.title}</p>
					<Link to='/'>Go To Home</Link>
			</div>
		)
	}
}
export default About;
