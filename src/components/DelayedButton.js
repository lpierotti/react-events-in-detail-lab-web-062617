// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
	constructor(){
			super()
		}
	delay = event => {
		event.persist()
		this.props.onDelayedClick(event)
	}

	render(){
		return <button onClick={this.delay}> </button>
	}

}

export default DelayedButton;