import template from './contactListItem.component.html';
import controller from './contactListItem.controller.js';
import './contactListItem.component.scss';

let contactListItemComponent = {
  restrict: 'E',
  bindings: {
    contact: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};
export default contactListItemComponent;