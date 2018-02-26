import angular from 'angular';
    import ContactModule from './contact/contact.module';
    import ContactListAddItemModule from './contactListAddItem/contactListAddItem.module';
    import ContactListItemModule from './contactListItem/contactListItem.module';
    import MainModule from './main/main.module';

const ComponentsModule = angular.module('app.components',[
       ContactModule.name, 
     ContactListAddItemModule.name, 
     ContactListItemModule.name, 
     MainModule.name
]);

export default ComponentsModule;