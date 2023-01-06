// const contacts = require("./db/contacts");

// // contacts.listContacts()
// //     .then(data => console.log(data));

// const invokeAction = async ({ action, id, name, email, phone }) => {
//     switch (action) {
//         case "list" :
//             const allContacts = await contacts.listContacts();
//             console.log(allContacts);
//             break;
//         // case "getById" :
//         //     const oneContact = await contacts.getById(id);
//         //     console.log(oneContact);
//         //     break;
//         default:
//             console.log("Unknown action")

//     }
// }
// invokeAction({action: "list"})
// // invokeAction({action: "getById", id: "4"})
const contacts = './db/contacts.js';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
      
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts)
      break;
      
    default:
      console.log("Unknown action");
  };
};

invokeAction({ action: "list"});
//  invokeAction({ action: "get", id: 1});

// const actionIndex = process.argv.indexOf("--action");

// if(actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1];
//     invokeAction({action})
// }