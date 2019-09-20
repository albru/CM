import sideDrawerReducer, { initialState } from './sideDrawer';
import * as actionTypes from '../actions/actionTypes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe('sideDrawerReducer', () => { //  describe - группировка для наших тестов новостного редьюсера

    it('SIDE_DRAWER_TOGGLE', () => { // it - блок, конкретного unit-теста 
        const action = {
          type: actionTypes.SIDE_DRAWER_TOGGLE
        }
    
        expect(sideDrawerReducer(initialState, action)).toEqual({
            ...initialState,
            sideDrawerIsVisible: !initialState.sideDrawerIsVisible
        })
      })

    it('SIDE_DRAWER_CLOSE', () => { // it - блок, конкретного unit-теста 
        const action = {
            type: actionTypes.SIDE_DRAWER_CLOSE
        }

        expect(sideDrawerReducer(initialState, action)).toEqual({
            ...initialState,
            sideDrawerIsVisible: false
        })
    })
})