import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import ServicesModule from './services/services';

angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  ServicesModule.name,
])
  .component('app', appComponent);