const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contactsPath =path.join(__dirname,"./db/contacts.json");
 
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

async function getContactById(id) {
  const contacts = await listContacts();
  
  const result = contacts.find(item =>
    item.id === id);
    if (!result) {
      return null;
    }
    return result;
   
};

function removeContact(contactId) {
  // ...твой код
}



async function addContact(name,email,phone) {
  const contacts = await listContacts();
  const NewContact = { ...name,...email,...phone, id:v4()};
  contacts.push(NewContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return NewContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};