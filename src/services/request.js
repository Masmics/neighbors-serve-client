import store from '../store';

import { getToken } from '../selectors/sessionSelector';

const request = (path, method, body) => {
  // eslint-disable-next-line no-undef
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      // requires all routes below to bear a valid user token
      // although backend only checks in routes w/ ensureAuth()
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    // if there's a body, stringify it
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `unable to fetch ${path}`;

      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');

