import React from 'react';
import { shallow, configure } from 'enzyme';
import chai from 'chai';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
describe('Header Test', () => {
    const item = shallow(<Header />);
    it('should render container', () => {
        chai.assert(item.hasClass('container'));
        chai.assert(item.hasClass('spaceup'));
    });
    it('should render dark/light modes', () => {
        chai.assert.equal(item.find('a').text(),'Dark / Light')
    });
});