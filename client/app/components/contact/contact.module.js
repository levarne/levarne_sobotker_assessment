import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactComponent from './contact.component';

const contactModule = angular.module('contact', [])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('contact', {
        url: '/contact/:contactId',
        component: 'contact',
        resolve: {
          contact: function (phonebookService, $transition$) {
            return phonebookService.getContact($transition$.params().contactId);
          }
        }
      })
      .state('add', {
        url: '/contact/add/',
        component: 'contact'
      });
  })
  .component('contact', contactComponent);
export default contactModule;