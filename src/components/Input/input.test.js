import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ModalInputList from './ModalInputList/ModalInputList';

configure({ adapter: new Adapter() })

describe('Modal', () => {
    it('should render correctly', () => {
        const output = shallow(
            <ModalInputList />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});