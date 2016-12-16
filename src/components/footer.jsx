/* 
Filename: footer.jsx 
Route Path: null
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Site-wide footer component.
Component Location: layouts/main.jsx
*/

import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  constructor(props){
  	super(props)
  	this.componentName = 'footer'
  }
  render() {
    return (
		<nav className="navbar navbar-inverse">
			<div className="container-fluid text-center">
				<i className="glyphicon glyphicon-cog app-name" data-app-name={this.componentName}></i>
			</div>
		</nav>
    )
  }
}