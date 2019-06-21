import { FETCH_MESSAGES } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.playload.messages;
    }
    default:
      return state;
  }
}
