import React from 'react';

// import { withTracker } from 'meteor/react-meteor-data';

class GameQuestion extends React.Component {


    render() {

        if (!this.props.questions || this.props.questions.length == 0) {
            return null;
        }
        let question = this.props.questions ? this.props.questions.find((q) => { return q._id == this.props.question; }) : "B";
        let index = this.props.index;

        //Added logic to display last question in case it cannot be found
        if (!question) {
            question = this.props.questions[this.props.questions.length-1];
            index = index - 1;
        }

        return (
            <p className="question">
                Question {index}: {question.text}
            </p>
        );
    }
};

export default GameQuestion;
