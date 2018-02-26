import angular from 'angular';
import contactListItemComponent from './contactListItem.component';

const contactListItemModule = angular.module('contactListItem', [])
  .component('contactListItem', contactListItemComponent);
export default contactListItemModule;