import { Types } from '../actions'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }
    default:
      return state
  }
}
