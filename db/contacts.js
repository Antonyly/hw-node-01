const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async() => {
 const data = await fs.readFile(contactsPath)
 return JSON.parse(data)
}

// const getContactById = async(id) => {
//     const contacts = await listContacts();
//     const result = contacts.find(item => item.id === id.toString())

//     return result || null
// }

module.exports = {
    listContacts,
    // getContactById,
    // removeContact,
    //  addContact
}

// function getById(id) {
//   const contact = listContacts();
//   const result = contact.find(el => el.id === id)

//   return result || null;
// }
// const getContactById = async(id) => {
//   const contacts = await listContacts();
//   // const result = contacts.find(item => item.id === id);
//   const result = contacts.includes(item => item.id === id )

//   return result;
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
