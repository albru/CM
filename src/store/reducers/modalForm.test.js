import modalFormReducer, { initialState } from './modalForm';
import * as actionTypes from '../actions/actionTypes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('modal reducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  
    it('MODAL_TOGGLE', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.MODAL_TOGGLE,
      }
  
      expect(modalFormReducer(initialState, action)).toEqual({
        ...initialState,
        modalIsVis: !initialState.modalIsVis
      })
    })

    it('MODAL_CLOSE', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.MODAL_CLOSE,
      }
  
      expect(modalFormReducer(initialState, action)).toEqual({
        ...initialState,
        modalIsVis: false
      })
    })

    it('MODAL_FETCH_START', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.MODAL_FETCH_START,
      }
  
      expect(modalFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.loading = true
      })
    })

    it('MODAL_FETCH_SUCCESS', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.MODAL_FETCH_SUCCESS,
      }
  
      expect(modalFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.success = true,
        ...initialState.fetchResult.loading = false
      })
    })

    it('MODAL_FETCH_ERROR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.MODAL_FETCH_ERROR,
        error: ''
      }
  
      expect(modalFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.loading = false,
        ...initialState.fetchResult.error = action.error
      })
    })

    it('MODAL_FETCH_CLEAR_ERROR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.MODAL_FETCH_CLEAR_ERROR
      }
  
      expect(modalFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.success = null,
        ...initialState.fetchResult.error = null
      })
    })

  })
