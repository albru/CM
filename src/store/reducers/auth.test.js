import authReducer, { initialState } from './auth';
import * as actionTypes from '../actions/actionTypes';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe('auth reducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  
    it('AUTH_START', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.AUTH_START,
      }
  
      expect(authReducer(initialState, action)).toEqual({
        ...initialState,
        error: null,
        loading: true
      })
    })

    it('AUTH_SUCCESS', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.AUTH_SUCCESS,
      }
  
      expect(authReducer(initialState, action)).toEqual({
        ...initialState,
        token: action.idToken, 
        userId: action.userId,
        error: null,
        loading: false
      })
    })

    it('AUTH_ERROR', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.AUTH_ERROR,
      }
  
      expect(authReducer(initialState, action)).toEqual({
        ...initialState,
        error: action.error,
        loading: false
      })
    })
    
    it('AUTH_LOGOUT', () => { // it - блок, конкретного unit-теста 
      const action = {
        type: actionTypes.AUTH_LOGOUT,
      }
  
      expect(authReducer(initialState, action)).toEqual({
        ...initialState,
        token: null,
        userId: null
      })
    })

  })

