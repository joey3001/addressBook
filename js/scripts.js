// Business Logic for addressBook 
function addressBook() {
  this.contacts = [];
  this.currentID = 0;
}

addressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

addressBook.prototype.assignId = function() {
  this.currentId += 1; 
  return this.currentId; 
}

// Business Logic for Contacts 
function contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName; 
  this.lastName = lastName; 
  this.phoneNumber = phoneNumber; 
}

contact.prototype.fullName = function() { 
  return this.firstName + " " + this.lastName; 
}