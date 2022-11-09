import React from 'react';
import './App.css';
import Button from './components/Button';

const colors = ['blue', 'red', 'yellow'];
class App extends React.Component {
	state = { color: '' };
	onButtonClick = (e) => {
    let currColor = e.target.value;
		this.setState({ color: currColor });
		console.log(e.target.value);
	};

	render() {
		return (
			<div style={{  width: '250x' }}>
				{colors.map((btn, i) => {
					return (
						<div>
							<Button
								color={colors[i]}
								btn={btn}
								click={this.onButtonClick}></Button>
						</div>
					);
				})}
				<div>The color selected: {this.state.color}</div>
			</div>
		);
	}
}

export default App;