import { combineReducers } from 'redux'

const listings = (state = {}, action) => {
  switch (action.type) {
    case 'PUBLISH_LISTING':
      return state
    default:
      return state
  }
}

const landlordState = combineReducers({
  listings
  // applications,
  // leases,
  // payments,
  // maintenance
})

export default landlordState
