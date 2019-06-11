import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('homeStore')
@observer
class Home extends Component{

	getData=()=>{
		this.props.homeStore.getList()
		console.log(this.props.homeStore.list)
	}
	render(){
		return (
			<div>
					<p>{this.props.homeStore.title}</p>
					<button onClick={this.getData}>获取数据</button>
					<Link to='/about'>Go To About</Link>
				<p>获取的数据来了：</p>
				{
					this.props.homeStore.list && this.props.homeStore.list.map((item, index)=>{
						return (
							<div key={item.id}>
								标题: {item.title}
							</div>
						)
					})
				}
			</div>
		)
	}
}
export default Home;
