const contact = () => {
  const contact = document.createElement('div');
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('id', 'contact');
  contactDiv.innerHTML = 'Contact';
  contact.appendChild(contactDiv);
  return contact;
};

export default contact;