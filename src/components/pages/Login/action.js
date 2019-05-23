import { RSAA } from  "redux-api-middleware";

const REQUEST = 'TEST_REQUEST';
const RECEIVE = 'TEST_SUCCESS';
const FAILURE = 'TEST_FAILURE';

export function testApi() {
  return {
    [RSAA]: {
      endpoint: "/api/test",
      method: 'GET',
      types: [REQUEST, RECEIVE, FAILURE]
    }
  }
}
