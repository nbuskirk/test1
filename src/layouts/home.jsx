/* 
Filename: home.jsx 
Route Path: '/'
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Homepage layout/template for the '/' route
*/

/*

CURRENT:

Creates a radial slider, with static sizing, that outputs the rotation % to an output DIV.
Radial component creates a couple children, one of which is a RadialHandle which controls most of the math currently.
Component refreshes/updates itself when you instantiate a click on the RadialHandle and start to drag.
Check React dev tools to see the state and properties of <RadialHandle /> 

TODO/THOUGHTS: 
	
	Prop handling 
	
	scale:  Instead of setting a width/height on the circle, we should 'scale' the component
			This would let us resize the circle/dynamic sizing and instead of calculating the 
			scale manually (what % of 360 is our NEW size?) we just use this param. Doing all math * scale.
	min: 	Set a min-value for the slider, and snap the handle accordingly.
	max: 	Set a max-value for the slider, and snap the max rotation accordingly.
	half: 	Set to true/false to render a half-circle instead = All math / 2. 
	bar: 	Hex value or rgba for the 'track/border'. 

	Animation
		Add a lot more effects. Perhaps changing the value/dragging should animate a hue shift on something? Border 
		of the sphere maybe? :)
*/


import React from 'react'
import {render} from 'react-dom'


export default class Home extends React.Component {
	constructor(){
		super();
		this.test_data = {};
	}
  componentDidMount() {
  	this.test_data = {
  		name: 'test',
  		bleh: false
  	}
  }
  render() {
    return (
    	<div>
    		<h1>Resume.</h1>
    		<p>Say hello Mr. Worm!</p>
    	</div>
    )
  }
}