function AddressBook(){ // constraction function
   this.contacts = []; //add property which is array for thisContacts
   this.initialComplete = false;
}


// Testing Asynchronous Code to make an API call to server to resive data
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

// to make it an Asynchronous we will set the timer
    setTimeout(function() {
        self.initialComplete = true; //calllback
        if (cb) {
            return cb();
        }
    }, 3); 
}

AddressBook.prototype.addContact = function(contact) { // create addContact function that accept contact as a parameter
    this.contacts.push(contact); // and pushes this contact onto the array 
}

AddressBook.prototype.getContact = function(index) {  // create getContact function that accept index as a parameter
    return this.contacts[index];  // return thisContact (element of the array) with the index 
}

AddressBook.prototype.deleteContact = function(index) {  // create deleteContact function that accept index
    this.contacts.splice(index, 1); // splice method to remove eleme from index
}