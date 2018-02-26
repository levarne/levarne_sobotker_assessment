import template from './contactListAddItem.component.html';
import controller from './contactListAddItem.controller.js';
import './contactListAddItem.component.scss';

let contactListAddItemComponent = {
  restrict: 'E',
  bindings: {
    searchTerm: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};
export default contactListAddItemComponent;