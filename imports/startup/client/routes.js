import React  from 'react';
import { render } from 'react-dom';

import App from '../../ui/pages/App';
import TryItNow from '../../ui/pages/TryItNow';

import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

function renderRoutes() {
	return (

		<Router history={browserHistory}>
				<Route exact path="/" component={TryItNow}/>
                <Route exact path="/try-it-now" component={TryItNow}/>
		</Router>

	)
} 

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});