import angular from 'angular';
import contactListAddItemComponent from './contactListAddItem.component';

const contactListAddItemModule = angular.module('contactListAddItem', [])
  .component('contactListAddItem', contactListAddItemComponent);
export default contactListAddItemModule;