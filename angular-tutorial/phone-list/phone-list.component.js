// Register `phoneList` component, along with its associated controller and template
angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function(response) {
          self.phones = response.data;
          // pre-process the HTTP response by limiting the number of phones to the first 5 in the list
          // self.phones = response.data.slice(0,5);
        })
      }
    ]
  });
