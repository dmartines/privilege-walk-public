import Games from '../games';

const getGames = function () {
  return Games.find({});
};

Meteor.publish('getGames', getGames);
