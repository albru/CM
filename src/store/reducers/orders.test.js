import ordersReducer, { initialState } from './orders';
import * as actionTypes from '../actions/actionTypes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe('ordersReducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  
    it('ORDERS_FETCH_GET_START', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDERS_FETCH_GET_START
      }
  
      expect(ordersReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.loading = true
      })
    })

    it('ORDERS_FETCH_GET_SUCCESS', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDERS_FETCH_GET_SUCCESS,
        data: {}
      }
  
      expect(ordersReducer(initialState, action)).toEqual({
        ...initialState,
        data: action.data,
        userId: action.userId,
        ...initialState.fetchResult.success = true,
        ...initialState.fetchResult.loading = false,
      })
    })

    it('ORDERS_FETCH_GET_ERROR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDERS_FETCH_GET_ERROR,
        error: ''
      }
  
      expect(ordersReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.error = action.error,
        ...initialState.fetchResult.loading = false
      })
    })
    
    it('ORDERS_FETCH_GET_CLEAR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.ORDERS_FETCH_GET_CLEAR,
      }
  
      expect(ordersReducer(initialState, action)).toEqual({
        ...initialState,
        ...initialState.fetchResult.error = null,
        ...initialState.fetchResult.loading = false,
        ...initialState.fetchResult.success = null
      })
    })
  })