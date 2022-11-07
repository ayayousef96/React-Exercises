import React from "react";
import data from "./data";
import Card from "./components/Card";
import Name from "./components/Name";

class App extends React.Component {
	state = { names: [], before1990: []};

	names = () => {
		const names = data.map((person) => person.name);
		return this.setState({ names });
	};

	before1990 = () => {
		const filtered = data.filter(
			(person) => new Date(person.birthday).getFullYear() < 1990
		);
		return this.setState({ before1990: filtered });
	};

	componentDidMount() {
		this.names();
		this.before1990();
		
	}

	printCard = () => {
		const myArr = this.state.before1990.map((person) => {
			return (
				<div>
					<Card obj={person} />
				</div>
			);
		});
		return myArr;
	};

	
	render() {
		return (
			<div style={{ display: 'flex' }}>
				<Name persons={this.state.name} />
				{this.printCard()}
			</div>
		);
	}
}
export default App;