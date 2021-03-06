import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './Button';

configure({ adapter: new Adapter() })

describe('Button', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Button />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});