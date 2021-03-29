
import React from 'react';
import { shallow, configure } from 'enzyme';
import chai from 'chai';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Footer Test', () => {
    const item = shallow(<Footer />);
    it('should render footer element', () => {
        chai.assert(item.find('footer'));
    });
    it('should render Github link', () => {
        chai.assert.equal(item.find('a').text(),'Github');
    });
    it('check correct Github link', () => {
        chai.assert.equal(item.find('a').prop('href'),'https://github.com/dmartines/privilege-walk-public');
    });
});