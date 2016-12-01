export /* @ngInject */ function homeRoutes($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home-page></home-page>',
    });
}
