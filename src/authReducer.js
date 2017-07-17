const initalState = {
  authenticated: true
}

export default function authReducer(state = initalState, action) {
  switch (action.type) {
    case 'LOGGING IN':
      return state
    case 'LOGGED IN':
      return state
    case 'LOGGING OUT':
      return state
    case 'LOGGED OUT':
      return state
    default:
      return state

  }
}
