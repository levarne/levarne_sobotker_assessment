import template from './contact.component.html';
import controller from './contact.controller.js';
import './contact.component.scss';

let contactComponent = {
  restrict: 'E',
  bindings: {
    contact: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};
export default contactComponent;