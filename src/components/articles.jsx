/* 
Filename: articles.jsx 
Route Path: null 
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Article component for site. This is the top-most parent, children get rendered under this.
*/

import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'

export default class Articles extends React.Component {
  render() {
    return (
    	<div>
    		{this.props.articles}
    	</div>
    )
  }
}