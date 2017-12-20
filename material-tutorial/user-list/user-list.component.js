// Register `userList` component as a module of itself, along with its associated controller and template
angular
  .module('userList', ['core.user', 'ui.router'])
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['getUser',
      function UserListController(User) {
        this.users = User.query();
        this.orderProp = 'age';
      }
    ]
  })
  .config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      // template: '<h3>Its the UI-Router hello world app!</h3>'
      component: 'userList'
    }

    // var detailState = {
    //   name: 'details',
    //   url: '/details',
    //   templateUrl: 'user-detail/user-detail.template.html'
    // }

    $stateProvider.state(helloState);
    // $stateProvider.state(detailState);
  });
