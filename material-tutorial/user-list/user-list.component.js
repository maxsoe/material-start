// Register `userList` component as a module of itself, along with its associated controller and template
angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('data/users/users.json').then(function(response) {
          self.users = response.data;
        });
      }
    ]
  });
