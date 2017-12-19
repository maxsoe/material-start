// Register `userList` component as a module of itself, along with its associated controller and template
angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['getUser',
      function UserListController(User) {
        this.users = User.query();
        this.orderProp = 'age';
      }
    ]
  });
