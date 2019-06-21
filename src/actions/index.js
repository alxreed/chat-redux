// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com';
const FETCH_MESSAGES = 'FETCH_MESSAGES';

// eslint-disable-next-line import/prefer-default-export
export function fetchMessages() {
  const url = `${BASE_URL}/general/messages`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}
