import { combineReducers } from 'redux'

const renterProfile = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE':
      return state
    break
    default: return state
  }
}

const tenantState = combineReducers({
  renterProfile
})

export default tenantState
