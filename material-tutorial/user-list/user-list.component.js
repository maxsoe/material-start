// Register `userList` component as a module of 'TutorialApp', along with its associated controller and template
angular
  .module('TutorialApp')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController() {
      this.users = [{
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }];
    }
  });
