// /* eslint-env mocha */
// /* eslint-disable func-names, prefer-arrow-callback */

// import { Meteor } from 'meteor/meteor';
// import { Tracker } from 'meteor/tracker';
// import { DDP } from 'meteor/ddp-client';
// import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
// import { assert } from 'chai';

// import { Promise } from 'meteor/promise';

// import { generateData } from '../../api/generate-data.app-tests';
// import { Questionnaires } from '../../api/questionnaires/questionnaires';


// // Utility -- returns a promise which resolves when all subscriptions are done
// const waitForSubscriptions = () => new Promise(resolve => {
//     const poll = Meteor.setInterval(() => {
//         if (DDP._allSubscriptionsReady()) {
//             Meteor.clearInterval(poll);
//             resolve();
//         }
//     }, 200);
// });

// // Tracker.afterFlush runs code when all consequent of a tracker based change
// //   (such as a route change) have occured. This makes it a promise.
// const denodeify = require('es6-denodeify')(Promise)
// // const afterFlushPromise = denodeify(Tracker.afterFlush);

// if (Meteor.isClient) {
//     describe('data available when routed', () => {
//         // First, ensure the data that we expect is loaded on the server
//         //   Then, route the app to the homepage
//         beforeEach(() => generateData()
//             .then(() => FlowRouter.go('/'))
//             .then(waitForSubscriptions)
//         );

//         describe('when logged out', () => {
//             it('has all public lists at homepage', () => {
//                 assert.equal(Questionnaires.find().count(), 38);
//             });

//             // it('renders the correct list when routed to', () => {
//             //     const list = Questionnaires.findOne();
//             //     FlowRouter.go('/', { dlmode: true, questionnaireName="main-questionnaire" });

//             //     return afterFlushPromise()
//             //         .then(waitForSubscriptions)
//             //         .then(() => {
//             //             assert.equal($('.title-wrapper').html(), list.name);
//             //             assert.equal(Todos.find({ listId: list._id }).count(), 3);
//             //         });
//             // });
//         });
//     });
// }