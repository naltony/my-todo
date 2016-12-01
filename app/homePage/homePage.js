import angular from 'angular';

import { homeRoutes } from './home.route';
import { HomePageComponent } from './home.component';

export default angular.module('MyTodo.homePage', ['ui.router'])
    .config(homeRoutes)
    .component('homePage', HomePageComponent);
