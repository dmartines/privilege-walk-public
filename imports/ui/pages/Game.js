import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import Questionnaires from '../../api/questionnaires/questionnaires';
import Questions from '../../api/questions/questions';

import GameQuestion from './GameQuestion';
import Tracker from '../components/Tracker';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            questionIndex: 0,
            stepForward: 0,
            stepBack: 0,
        }

        this.stepForward = this.stepForward.bind(this);
        this.stepBack = this.stepBack.bind(this);
        this.startOver = this.startOver.bind(this);
        this.startGame = this.startGame.bind(this);

        this.trackerInput = React.createRef()
    }

    stepForward(e) {
        e.preventDefault();
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            stepForward: this.state.stepForward + 1,
        });
    }

    stepBack(e) {
        e.preventDefault();
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            stepBack: this.state.stepBack + 1,
        });
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

        var trackerSize = {
            size: questionListLength * 2,
            start: Math.round(questionListLength),
        };

        var playerPositions = [{
            name: "X",
            position: trackerSize.start + this.state.stepForward - this.state.stepBack,
        }];

        return (
            <div className="container">
                <div className="row questions">
                    <Tracker dlmode={this.props.dlmode} trackerSize={trackerSize} players={playerPositions} />
                    <div className="col-12 trackers" ref={this.trackerInput}>
                    </div>
                    <div className="col-12">
                        {this.state.gameStarted && questionListLength ?
                            <GameQuestion index={this.state.questionIndex + 1} question={question} questions={this.props.questions} />
                            :
                            <div>
                                <p className="question">You are the <span className="trackerX">X</span> at the start</p>
                                <p className="question">During the game you will be asked to walk back or forward</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="row justify-center">
                    {!this.state.gameStarted ?
                        <button className={this.props.dlmode ? "btn btn-outline-dark" : "btn btn-outline-light"} onClick={this.startGame} type="button">Click to start game</button>
                        :
                        questionListLength ?
                            question ?
                                <div>
                                    <button style={{ marginRight: 10 }} className={this.props.dlmode ? "btn btn-outline-dark" : "btn btn-outline-light"} onClick={this.stepBack} type="button">Step back</button>
                                    <button className={this.props.dlmode ? "btn btn-outline-dark" : "btn btn-outline-light"} onClick={this.stepForward} type="button">Step forward</button>
                                </div>
                                :
                                <a href="#" onClick={this.startOver} className={this.props.dlmode ? "" : "adark"}>Start over?</a>
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

