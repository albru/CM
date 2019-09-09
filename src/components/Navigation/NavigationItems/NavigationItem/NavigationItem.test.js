import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItem from './NavigationItem';

configure({ adapter: new Adapter() })

describe('NavigationItem', () => {
    it('should render correctly', () => {
        const output = shallow(
            <NavigationItem name="mockName" route="mockRoute" />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});