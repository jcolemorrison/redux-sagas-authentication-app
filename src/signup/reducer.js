import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

const reducer = function signupReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      }

    // reset the state and add a body message of success!
    // remember our successful returned payload will be:
    // {"email": "of the new user", "id": "of the user"}
    case SIGNUP_SUCCESS:
      return {
        errors: [],
        messages: [{
          body: `Successfully created account for ${action.response.email}`,
          time: new Date(),
        }],
        requesting: false,
        successful: true,
      }

    // reset the state but with errors!
    // the error payload returned is actually far
    // more detailed, but we'll just stick with
    // the base message for now
    case SIGNUP_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }

    default:
      return state
  }
}

export default reducer
