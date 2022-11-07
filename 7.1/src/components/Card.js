import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div
				style={{
					border: '2px solid green',
					width: 'fit-content',
					margin: '10px',
					padding: '40px',
				}}
			>
				<h1>{this.props.obj.name}</h1>
				<h3>{this.props.obj.birthday}</h3>
				<h3>Favorite Foods:</h3>
				<ul>
					<h3>Meat:</h3>
					<li>{this.props.obj.favoriteFoods.meats[0]}</li>
					<li>{this.props.obj.favoriteFoods.meats[1]}</li>
				</ul>
				<ul>
					<h3>Fish:</h3>
					<li>{this.props.obj.favoriteFoods.fish[0]}</li>
					<li>{this.props.obj.favoriteFoods.fish[1]}</li>
				</ul>
				
			</div>
		);
	}
}
export default Card;