import * as React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Locale from './utils/locale/Locale';
import Home from './Home';

function App() {
	return <div className="app">
		<div className="header">
			<div className="header__title">Yet Another Utils Site</div>
		</div>
		<Router>
			<Route exact path="/" component={Home}/>
			<Route path="/locale" component={Locale}/>
		</Router>
	</div>;
}

export default App;
