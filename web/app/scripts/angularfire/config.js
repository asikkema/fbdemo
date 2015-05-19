angular.module('firebase.config', [])
  .constant('FBURL', 'https://blazing-inferno-521.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous'])

  .constant('loginRedirectPath', '/login');
