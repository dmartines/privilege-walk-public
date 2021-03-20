import React from 'react';
import Header from '../layouts/Header';
import Game from '../pages/Game';

class TryItNow extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-2 logotext">
							<div className="row">
								<div className="col-2 col-sm-12" style={{marginBottom:5}}>
									<img className="logoimg" src="img/pw-logo.png" />
								</div>
								<div className="col-3 col-sm-12 logotext">
									<h3>Priviledge Walk</h3>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-10">
							<Game questionnaireName="main-questionnaire" />
						</div>
					</div>
				</div>
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

