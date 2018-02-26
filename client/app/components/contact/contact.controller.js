class contactController {
  constructor(phonebookService, $location) {
    'ngInject';
    this.name = 'contact';

    this.phonebookService = phonebookService;

    this._$location = $location;
  }

  $onInit() {
    this.path = this._$location.path();

    if (!this.contact) {
      return;
    }

    this.fullName = this.contact.entries.name;
    this.phone = this.contact.entries.phoneNumber;
    this.email = this.contact.entries.email;
    this.address = this.contact.entries.address;
    this.notes = this.contact.entries.notes;
  }

  saveContact() {
    const contact = {
      fullName: this.fullName,
      phone: this.phone,
      email: this.email,
      address: this.address,
      notes: this.notes,
    }

    this.phonebookService.setContact(contact);
  }
}

export default contactController;