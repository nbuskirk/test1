/* 
Filename: index.jsx 
Route Path: null
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Application entry point. 
*/

/* Packages / Modules */
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import { render } from 'react-dom'

/* Pages / Layouts */
import MainLayout from './layouts/main.jsx'
import Home from './layouts/home.jsx'

/* Components */
import Radial from './components/radial.jsx'
import Articles from './components/articles.jsx'

/* Styles? */
import styles from '../src/css/main.less'

/* Routes */
render((
	<Router history={hashHistory} >
		<Route component={MainLayout} >
			<Route path="/" component={Home} />
			<Route path="/articles" component={Articles} />
		</Route>
	</Router>
), document.getElementById('app-root'));

