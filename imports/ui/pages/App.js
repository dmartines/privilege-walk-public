import React from 'react';
import Header from '../layouts/Header';
import IntroText from '../components/home/IntroText';

class App extends React.Component {

	render() {
		return (
			<div>
				<div className="cover">
					<Header />
					<IntroText />
				</div>
			</div>
		);
	}
};

export default App;