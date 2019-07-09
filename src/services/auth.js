import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  // where do we send them after login?
  redirectUri: process.env.AUTH0_CALLBACK,
  // what type of response do we want back?
  responseType: 'token id_token',
  scope: 'openid profile'
});

// if user isn't logged in send to auth0 login or signup
export const login = () => {
  auth0.authorize();
};

// have result, access token & id token before moving on
export const handleAuth = () => {
  // auth0 still uses callbacks - turn it into new promise w/ resolve + reject
  return new Promise((resolve, reject) => {
    // parseHash takes callback (error, results) - parse url from browser bar
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        // if correct result, grab user profile
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user profile');
          resolve({
            id: profile.sub,
            // profile.name/picture are auth0-defined,  your-user profile fields
            // view fields using just "resolve(profile);"
            username: profile.name,
            // change to idToken, it's stored in redux
            token: results.idToken,
            image: profile.picture
          });
        });
      } else {
        reject('Unable to log in');
      }
    });
  });
};
