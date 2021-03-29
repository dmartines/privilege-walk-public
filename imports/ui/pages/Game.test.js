// // __tests__/hidden-message.js
// // these imports are something you'd normally configure Jest to import for you
// // automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
// import '@testing-library/jest-dom'
// // NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

// import * as React from 'react'
// import {render, fireEvent, screen} from '@testing-library/react'
// import Game from './Game';

// test('starts the game when you click Start', () => {
//   const dlmode = true
//   render(<Game dlmode={dlmode} questionnaireName="main-questionnaire" />)

//   // query* functions will return the element or null if it cannot be found
//   // get* functions will return the element or throw an error if it cannot be found
//   expect(screen.queryByText(testMessage)).toBeNull()

//   // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
//   fireEvent.click(screen.getByLabelText(/show/i))

//   // .toBeInTheDocument() is an assertion that comes from jest-dom
//   // otherwise you could use .toBeDefined()
//   expect(screen.getByText(testMessage)).toBeInTheDocument()
// })

// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import chai from 'chai';
// import Game from './Game';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
// describe('Game Test', () => {
//     const item = shallow(<Game />);
//     it('should render container', () => {
//         chai.assert(item.hasClass('container'));
//         chai.assert(item.find('div.questions'));
//     });
//     it('button to start game', () => {
//         chai.assert.equal(item.find('button').text(),'You are the <span X at the start');
//     });
// });