describe('AddressBook', function() {   // create testing SUITE for AddressBook
     var addressBook, // initiate AddressBook object
         thisContact;     // and initiate contact as thisContact / of AddressBook object
    
    beforeEach(function() {
        addressBook = new AddressBook(), // initiate AddressBook object
        thisContact = new Contact();     // and initiate contact as thisContact / of AddressBook object
    });
       
 // TEST 1   
    it('should be able to add a contact', function(){  // where we want test if contact can be add to AddressBook
     // here we ddefining what objects/property AddressBook have: - this is done ones for SUITE 
    
    addressBook.addContact(thisContact);  //then pass thisContact as parameter to the method called addContact
    expect(addressBook.getContact(0)).toBe(thisContact); // make the test 
        // expect(getContact function to put new contact into index 0).toBe - thisContact     
    });
    
 // TEST 2 
    it('should be able to delete a contact'), function() {
        addressBook.addContact(thisContact);    // first addContact so we have what to delete
        addressBook.deleteContact(0);           // that deleteContact  from index 0
        
        // testing
        // expect(first addressBook to get contact into index 0) which we have delete above
        // therefor we want contact at index 0 to not exist (not defined anymore)...
        expect(addressBook.getContact(0)).not.toBeDefined();
    };
});





describe('Async Address Book', function() {    // new  testing SUITE
     var addressBook = new AddressBook();
    
     beforeEach(function(done) {
         addressBook.getInitialContacts(function() {
             done();   //Basically what this does is it will check whether the asynchronous function has been completed or not. Once the asynchronous function has been completed successfully it will signal the testing framework that the task has been done and then we can continue what we were testing.
        });
     });
    
    it('should grab initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});