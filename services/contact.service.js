let contacts = [];

const findContact = (email) => {
  if (contacts.length > 0) {
    const contactExists = contacts.some((contact) => {
      return contact.email === email
    })
    return contactExists;
  }
  return false
}

const addContact = (data) => {
  contacts.push(data);
  return contacts;
}

module.exports = {
  findContact,
  addContact
}