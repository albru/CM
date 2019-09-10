import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BreadCrumbs from './BreadCrumbs';

configure({ adapter: new Adapter() })

describe('BreadCrumbs', () => {
    it('should render correctly', () => {
        const props = {
            crumbs: []
        }
        const output = shallow(
            <BreadCrumbs {...props}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});