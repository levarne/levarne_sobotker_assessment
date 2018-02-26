import angular from 'angular';
import phonebookService from './phonebook/phonebook';

const ServicesModule = angular.module('app.services', [])
  .service('phonebookService', phonebookService);

export default ServicesModule;