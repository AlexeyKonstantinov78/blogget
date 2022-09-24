/**
 * https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&
state=RANDOM_STRING&redirect_uri=URI&scope=SCOPE_STRING
 */

export const URL = 'https://oauth.reddit.com';
export const URL_AUTH = 'https://www.reddit.com/api/v1/authorize?';
export const CLIENT_ID = '-xMmJ9VHR1j-QlOJigN2fw';
export const RESPONSE_TYPE = 'token';
export const RANDOM_STRING = 'random_string';
export const REDIRECT_URI = 'http://localhost:3000/auth';
export const SCOPE = 'identity submit read';
