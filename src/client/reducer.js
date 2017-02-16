import { CLIENT_SET, CLIENT_UNSET } from './constants'

const initialSate = {
  id: null,
  token: null,
}

const reducer = function clientReducer (state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      return {
        id: action.token.userId,
        token: action.token,
      }

    case CLIENT_UNSET:
      return {
        id: null,
        token: null,
      }

    default:
      return state
  }
}

export default reducer
