import orderFormReducer, { initialState } from './orderForm';
import * as actionTypes from '../actions/actionTypes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe('orderFormReducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  
    it('ORDER_FETCH_POST_START', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDER_FETCH_POST_START,
      }
  
      expect(orderFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.loading = true
      })
    })

    it('ORDER_FETCH_POST_SUCCESS', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDER_FETCH_POST_SUCCESS,
        data: {},
        userId: ''
      }
  
      expect(orderFormReducer(initialState, action)).toEqual({
        ...initialState,
        data: action.data,
        userId: action.userId,
        ...initialState.fetchResult.success = true,
        ...initialState.fetchResult.loading = false,
      })
    })

    it('ORDER_FETCH_POST_ERROR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDER_FETCH_POST_ERROR,
        error: ''
      }
  
      expect(orderFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.error = action.error,
        ...initialState.fetchResult.loading = false
      })
    })
    
    it('ORDER_FETCH_POST_CLEAR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDER_FETCH_POST_CLEAR,
      }
  
      expect(orderFormReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.error = null,
        ...initialState.fetchResult.loading = false,
        ...initialState.fetchResult.success = null
      })
    })

  })