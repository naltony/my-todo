export class HomeController {

  // @ngInject
  constructor($scope, $interval) {

    console.log("new home page controller")

  }
}

export const HomePageComponent = {
    bindings: {},
    templateUrl: '/homePage/home.html',
    controller: HomeController,
    controllerAs: 'home'
};