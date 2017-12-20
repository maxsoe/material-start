// Register `userDetail` component as a module of itself, along with its associated controller and template
angular
  .module('userDetail',['ui.router'])
  .component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: ['$routeParams', 'User',
      function UserDetailController($routeParams, User) {
        var self = this;
        self.user = User.get({userId: $routeParams.userId}, function(user) {
          self.setImage(user.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  })
  .config(function($stateProvider) {
    var detailState = {
      name: 'details',
      url: '/details',
      component: 'userDetail'
    }
    $stateProvider.state(detailState);
  });
