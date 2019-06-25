import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'cherlocker.auth0.com',
  clientID: '7AIfPmzhTH69egxAOtpI9SDGsaWdU3n0',
  // where do we send them after login?
  redirectUri: 'http://localhost:7890/callback',
  // what type of response do we want back?
  responseType: 'token id_token',
  scope: 'openid profile'
});

// is user isn't logged in send to auth0 login or signup
export const login = () => {
  auth0.authorize();
};

// have result, access token & id token before moving on
export const handleAuth = () => { 
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not retrieve user profile');
          resolve({
            username: profile.name,
            token: results.accessToken
          });
        });
      } else {
        reject('Unable to log in');
      }
    });
  });
};
