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
						<div className="col-sm-12 col-md-2">
							<h3>Priviledge Walk</h3>
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

