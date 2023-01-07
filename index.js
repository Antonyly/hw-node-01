const {program} = require("commander")
const contacts = require("./contacts");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const oneContact = await contacts.getContactById(id);
            console.table(oneContact);
            break;
        case "remove":
            const contactRemove = await contacts.removeContact(id);
            console.table(contactRemove)
            break;
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            console.log(newContact);
            break;
        default: 
            console.log("Unknown action")
    }
}


program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

invokeAction(argv);
