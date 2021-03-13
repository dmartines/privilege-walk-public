import Players from '../players';

const getPlayers = function () {
  return Players.find({});
};

Meteor.publish('getPlayers', getPlayers);
