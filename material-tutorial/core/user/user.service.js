angular
  .module('core.user')
  .factory('getUser', ['$resource',
    function($resource) {
      return $resource('data/users/:userId.json', {}, {
        query: {
          method: 'GET',
          params: {userId: 'users'},
          isArray: true
        }
      });
    }
  ]);
