import { combineReducers } from 'redux'

import auth from './authReducer'
import decks from './decksReducer'

export default combineReducers({ auth, decks })
