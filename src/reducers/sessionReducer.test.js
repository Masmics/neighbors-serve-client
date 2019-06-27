import reducer from './sessionReducer';

jest.mock('../services/auth.js');

describe('sessionReducer', () => {
  it('facilitates the set session action', () => {
    const newState = reducer(undefined, {
      type: 'SET_SESSION',
      payload: {
        username: 'my user',
        image: 'an image',
        token: 'a token'
      }
    });
    expect(newState).toEqual({
      username: 'my user',
      image: 'an image',
      token: 'a token'
    });
  });
});
