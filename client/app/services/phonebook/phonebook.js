class phonebookService {
	constructor($http, $q, $state, $stateParams) {
		'ngInject';

		this._$http = $http;
		this._$q = $q;
		this._$state = $state;
		this._$stateParams = $stateParams;
	}

	getContact (contactId) {
		function personMatchesParam(contact) {
			return contact.name === contactId;
		}

		return this.getContactList().then(function (contact) {
			return contact.find(personMatchesParam);
		});
	}

	getContactList () {
		let defer = this._$q.defer();
		const ContactList = getState();
			
		if (ContactList !== undefined && ContactList.length > 0) {
			defer.resolve(ContactList);

			return defer.promise;
		}

		return this._$http({ method: 'GET', url: 'app/services/phonebook/contacts.json', cache: true })
			.then((response) => {
				saveState(response.data, ()=>{});

				return response.data;
			}, (erorr) => {
				throw new Error('Unable to fetch contact list :: ', erorr);

				return 'Unable to fetch contact list'
			});
	}

	setContact (contact) {
		if (!contact.fullName) {
			return;
		}

		let contactList = getState();

		const contactId = createContactId(contact.fullName);
		
		let item = {
			name: contactId,
			entries: {
				name: contact.fullName,
				phoneNumber: contact.phone,
				email: contact.email,
				notes: contact.notes 
			}
		}

		contactList.push(item);
		saveState(contactList, () => {
			// this._$state.go('contact', {contactId: contactId});
			this._$state.reload();
		});
	}
}

// private method
function saveState (list, callback) {
	sessionStorage.contactList = angular.toJson(list);

	callback();
}

function getState () {
	return angular.fromJson(sessionStorage.contactList);
}

function createContactId (name) {
	if (typeof name == 'string') {
		return name.replace(/\s+/g, '_').toLowerCase();
	}
}

export default phonebookService;