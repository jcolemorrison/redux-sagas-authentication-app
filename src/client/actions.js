import { CLIENT_SET, CLIENT_UNSET } from './constants'

// there's literally no reason these are in a different
// format from the other component actions other than
// that I just lost track
export function setClient (token) {
  return {
    type: CLIENT_SET,
    token,
  }
}

export function unsetClient () {
  return {
    type: CLIENT_UNSET,
  }
}
