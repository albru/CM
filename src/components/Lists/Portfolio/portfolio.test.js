import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Portfolio from './Portfolioitems/PortfolioItems';

configure({ adapter: new Adapter() })

describe('PortfolioItems', () => {
    it('should render correctly', () => {
        const props = {
            dataArr: []
        }
        const output = shallow(
            <Portfolio {...props}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});