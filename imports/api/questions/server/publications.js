import Questions from '../questions';

Meteor.publish('questions.public', function() {
  return Questions.find({});
});