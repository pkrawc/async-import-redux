const initalState = {
  type: 'landlord',
  firstTime: false
}

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case 'updateUser':
      return state
    default:
      return state

  }
}
