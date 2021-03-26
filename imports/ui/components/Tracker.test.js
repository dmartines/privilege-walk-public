import React from 'react';
import { shallow, configure } from 'enzyme';
import chai from 'chai';
import Tracker from './Tracker';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
describe('Tracker Test', () => {
    const dlmode = true;
    const trackerSize = 40;
    const playerPositions = [{
        name: 'X', 
        position: 20
    }]

    const item = shallow(<Tracker dlmode={dlmode} trackerSize={trackerSize} players={playerPositions} />);
    it('should render tracker container', () => {
        chai.assert(item.hasClass('col-12'));
        chai.assert(item.find('div.trackercell'));
    });
    it('start tracker exists', () => {
        chai.assert.equal(item.find('div.trackercell').text(),'start');
        chai.assert.equal(item.find('div.trackercell').text(),'|');
    });
});