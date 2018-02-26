import template from './main.component.html';
import controller from './main.controller.js';
import './main.component.scss';

let mainComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'main'
};
export default mainComponent;