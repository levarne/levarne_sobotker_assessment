class mainController {
    constructor(phonebookService) {
      'ngInject';
      this.name = 'main';
      this.contactList = [];

      this.phonebookService = phonebookService;
    }

    $onInit() {
      this.phonebookService.getContactList().then((data) => {
        this.contactList = data;
      });
    }
  }

  export default mainController;