import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ModalForm from './ModalForm';

configure({ adapter: new Adapter() })

describe('ModalForm', () => {
    it('should render correctly', () => {
        const output = shallow(
            <ModalForm />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});