import Questionnaires from '../questionnaires';

Meteor.publish('questionnaire.public', function() {
  return Questionnaires.find({});
});