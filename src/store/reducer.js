import { combineReducers } from 'redux'

import uiReducer from './uiReducer'
import dataReducer from './dataReducer'

const reducer = combineReducers({ uiReducer, dataReducer })

export default reducer