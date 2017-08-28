// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
	constructor(){
		super()
	}
	render() {
		return <button onClick={this.findCoor.bind(this)}> </button>
	}

	findCoor(event) {
		var coordinates = [event.pageX, event.pageY];
		console.log(this)
		this.props.onReceiveCoordinates(coordinates)
	}
}

export default CoordinatesButton;