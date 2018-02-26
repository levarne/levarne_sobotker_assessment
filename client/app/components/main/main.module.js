import angular from 'angular';
import mainComponent from './main.component';

const mainModule = angular.module('main', [])
  .component('main', mainComponent);
export default mainModule;