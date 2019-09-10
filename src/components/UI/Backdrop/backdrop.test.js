import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Backdrop from './Backdrop';

configure({ adapter: new Adapter() })

describe('Modal', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Backdrop />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});