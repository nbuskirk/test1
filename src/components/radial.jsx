/* 
Filename: radial.jsx 
Route Path: /radial
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: radial dial widget / component.
Component Location: components/radial.jsx
*/

/*
	TODO: Prop handling, see src/layouts/home.jsx
*/

import React from 'react'
import {render} from 'react-dom'

export class RadialHandle extends React.Component {
	/* 
		constructor()
		Upon RadialHandle instantiation, create a state object with a dragging property set to false 
	*/
	constructor(props){
		super(props)
		this.state = {
			dragging: false
		}
	}	
	/*
		componentDidUpdate()
		Click event on handle triggers a state change, which in turn calls a refresh of the component lifecycle here
		Clicking, and releasing will take the event handler from the window (global) and pass it down to this component.
		This handles 'mousemove' on the page itself, and not just the RadialHandle component.

		This method also updates the DOM element created by the Radial component to show its value.
	*/
	componentDidUpdate(props, state) {
    	if (this.state.dragging && !state.dragging) {
     		window.addEventListener('mousemove', this.mouseMove)
      		window.addEventListener('mouseup', this.mouseUp)
    	} else if (!this.state.dragging && state.dragging) {
      		window.removeEventListener('mousemove', this.mouseMove)
      		window.removeEventListener('mouseup', this.mouseUp)
    	}
    	document.querySelector('.value').innerHTML = Math.round(this.state.rotation*100)/100;
  	}
  	/* 
  		mouseMove()
  		Calculates the proper CSS-based rotate() angle based on the widget container and windows mouse position.
		Sets RadialHandle state of 'rotation' to the newly figured out rotation angle, causing our component lifecycle to trigger.
  	*/
 	mouseMove = (e) => {
  		if (!this.state.dragging) return
   		const parent = document.querySelector('#radial-container');		
		let mouseX = e.pageX;
		let mouseY = e.pageY;
		let x = mouseX - parent.offsetLeft - parent.offsetWidth/2;
		let y = -1*(mouseY - parent.offsetTop - parent.offsetHeight/2);
		let rotationOffset = (this.props.defaultProps.circleWidth/4)-this.props.defaultProps.handleSize/2;
		let angle = (this.props.defaultProps.circleWidth/2)-this.props.defaultProps.handleSize;
		let rotation = (angle/2)-(Math.atan2(y,x)*(angle/Math.PI)); 		
		this.setState({
			rotation: rotation
		})
  	}
  	/*
  		mouseDown()
  		Sets RadialHandle state of 'dragging' to true, causing event handlers to be added
  	*/
	mouseDown = (e) => {
		if(e.button!==0) return
	    this.setState({ dragging: true })
	}
	/*
  		mouseUp()
  		Sets RadialHandle state of 'dragging' to false, causing event handlers to get removed
  	*/
	mouseUp = (e) => {
    	this.setState({ dragging: false })
  	}
  	/*
  		render()
  		Draw our RadialHandle using it's state of 'rotation' for the CSS positioning.
  	*/
	render() {
		var ctrans = 'rotate('+this.state.rotation+'deg)'
		var styles = {
			WebkitTransform: ctrans,
			transform: ctrans,
			msTransform: ctrans,
			left: this.props.handleDefaults.left
			
		}
		return <div style={styles} className="radial-handle" onMouseDown={this.mouseDown} />
	}
}

/* Main Radial Component, container for the RadialHandle */
export default class Radial extends React.Component {
	constructor(props){
		super(props)
		this.defaultProps = {
			circleWidth: 380,
			circleHeight: 380,
			handleSize: 10
		}
	}
	render() {
		const defaults = {
			width: (this.defaultProps.circleWidth+(this.defaultProps.handleSize*2))+'px',
			height: (this.defaultProps.circleHeight+(this.defaultProps.handleSize*2))+'px',
		}
		const circleDefaults = {
			width: this.defaultProps.circleWidth+'px',
			height: this.defaultProps.circleHeight+'px',
			top: this.defaultProps.handleSize+'px',
			left: this.defaultProps.handleSize+'px',
			WebkitBorderRadius: this.defaultProps.circleWidth/2+'px',
			borderRadius: this.defaultProps.circleWidth/2+'px',
			msBorderRadius: this.defaultProps.circleWidth/2+'px'
		}
		const handleDefaults = {
			left: ((this.defaultProps.circleWidth/2)+this.defaultProps.handleSize/2)+'px',
			handleSize: 10
		}
		return (
			<div id="radial-container" className="radial-container" style={defaults}>
				<div className="value">0.00</div>
				<RadialHandle start='0' min='0' max='100' defaultProps={this.defaultProps} handleDefaults={handleDefaults} circleDefaults={circleDefaults} />
				<div className="radial-circle" style={circleDefaults} />
			</div>
		)
	}
}
