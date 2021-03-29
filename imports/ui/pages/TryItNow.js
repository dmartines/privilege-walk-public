import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Game from '../pages/Game';

var utils = require('../../../lib/utils');

class TryItNow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			dlmode: utils.getDarkLightMode()
		}
		this.toggleDarkLight = this.toggleDarkLight.bind(this);
	}

	toggleDarkLight() {
		this.setState({
			dlmode: utils.getDarkLightMode(),
		});
	}

	render() {

		var element = document.body;
		if (!this.state.dlmode) {
			element.classList.add("dark-mode");
		} else {
			element.classList.remove("dark-mode");
		}

		return (
			<div>
				<Header dlmode={this.state.dlmode} callback={this.toggleDarkLight} />
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-2 logotext">
							<div className="row">
								<div className="col-2 col-sm-12" style={{ marginBottom: 5 }}>
									{this.state.dlmode ?
										<img className="logoimg" src="img/pw-logo.png" />
										:
										<img className="logoimg" src="img/pw-logo-w.png" />
									}

								</div>
								<div className="col-3 col-sm-12 logotext">
									<h3>Privilege Walk</h3>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-10">
							<Game dlmode={this.state.dlmode} questionnaireName="main-questionnaire" />
						</div>
					</div>
				</div>
				<Footer dlmode={this.state.dlmode}/>
			</div>
		);
	}
};

export default TryItNow;

// export default withTracker(props => {
// 	const questionSub = Meteor.subscribe('questions.public');

// 	return {
// 		questions: Questions.find({}).fetch(),
// 	};
// })(TryItNow);

