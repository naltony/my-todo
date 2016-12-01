/* globals __dirname */

import angular from 'angular';

import 'assets/stylesheets/application.scss';

// import Models     from 'models/models';
// import Services   from 'services/services';
// import Directives from 'directives/directives';
// import Components from 'components/components';
// import Filters    from 'filters/filters';
import Config     from 'config/config';
// import Routes     from 'config/routes/routes';
// import States     from 'states/states';
import TodoList   from 'todoList/todoList';
import HomePage   from 'homePage/homePage';

// Import all html files to put them in $templateCache
// If you need to use lazy loading, you will probably need
// to remove these two lines and explicitly require htmls
const templates = require.context(__dirname, true, /\.html$/);

templates.keys().forEach(templates);

angular.module('MyTodo', [

  // Services.name,
  // Directives.name,
  // Components.name,
  // Filters.name,
  Config.name,
  //   Routes.name,
  //   States.name,
    TodoList.name,
    HomePage.name
]);

angular.element(document).ready(() =>
  angular.bootstrap(document, ['MyTodo'], {
    strictDi: true
  }));
