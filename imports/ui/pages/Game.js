import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import Questionnaires from '../../api/questionnaires/questionnaires';
import Questions from '../../api/questions/questions';

import GameQuestion from './GameQuestion';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            questionIndex: 0,
            stepForward: 0,
            stepBack: 0
        }

        this.stepForward = this.stepForward.bind(this);
        this.stepBack = this.stepBack.bind(this);
        this.startOver = this.startOver.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    stepForward(e) {
        e.preventDefault();
        console.log("Clicked forward");
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            stepForward: this.state.stepForward + 1
        });
        console.log(this.state.questionIndex);
    }

    stepBack(e) {
        e.preventDefault();
        console.log("Clicked back");
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            stepBack: this.state.stepBack + 1
        });
        console.log(this.state.questionIndex);
    }

    startOver(e) {
        e.preventDefault();
        this.setState({
            gameStarted: false,
            questionIndex: 0,
            stepForward: 0,
            stepBack: 0
        });
    }

    startGame(e) {
        e.preventDefault();
        this.setState({
            gameStarted: true,
        });
    }

    render() {

        var questionnaire = {
            question_ids: null
        };
        if (this.props.questionnaire && this.props.questionnaire.length > 0) {
            questionnaire = this.props.questionnaire.find((q) => {
                return q.name == this.props.questionnaireName;
            });
        }

        var question = questionnaire && questionnaire.question_ids ? questionnaire.question_ids[this.state.questionIndex] : {};
        var questionListLength = questionnaire.question_ids ? questionnaire.question_ids.length : 0;

        let backText = "back " + new Array((questionListLength) + this.state.stepForward - this.state.stepBack).join("-");
        let forwardText = new Array((questionListLength) - this.state.stepForward + this.state.stepBack).join("-") + " forward";

        return (
            <div className="container">
                <div className="row questions">
                    {questionListLength ? <p style={{ marginBottom: 40 }} className="tracker">{backText}<span className="trackerX">X</span>{forwardText}</p> : null}
                    {this.state.gameStarted && questionListLength ?
                        <GameQuestion index={this.state.questionIndex + 1} question={question} questions={this.props.questions} />
                        :
                        <div>
                            <p className="question">You are the <span className="trackerX">X</span></p>
                            <p className="question">During the game you will be asked to walk back or forward</p>
                        </div>
                    }
                </div>
                <div className="row justify-center">
                    {!this.state.gameStarted ?
                        <button className="btn btn-outline-dark" onClick={this.startGame} type="button">Click to start game</button>
                        :
                        questionListLength ?
                            question ?
                                <div>
                                    <button style={{ marginRight: 10 }} className="btn btn-outline-dark" onClick={this.stepBack} type="button">Step back</button>
                                    <button className="btn btn-outline-dark" onClick={this.stepForward} type="button">Step forward</button>
                                </div>
                                :
                                <a href="#" onClick={this.startOver}>Start over?</a>
                            : null
                    }
                </div>
            </div>
        );
    }
};

export default withTracker(props => {
    Meteor.subscribe('questionnaire.public');
    Meteor.subscribe('questions.public');

    return {
        questionnaire: Questionnaires.find().fetch(),
        questions: Questions.find().fetch(),
    };

})(Game);

