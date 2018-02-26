class contactListItemController {
  constructor($log) {
    'ngInject'
    this.name = 'contactListItem';

    this._$log = $log;

    this.id = '';
    this.fullName = '';
  }

  $onInit() {
    try {
      if (typeof this.contact == 'object') {
        this.id = this.contact.name;
        this.fullName = this.contact.entries.name;
      } else {
        this._$log.err('Contact are not defined.');
      } 
    } catch (ex) {
      this._$log.warn('Unable to load contacts :: ', ex);
    }
  }
}

export default contactListItemController;