// let contact = {id, name, phone, email}

let nameField = document.querySelector('#name')
let emailField = document.querySelector('#email')
let phoneField = document.querySelector('#phone')
let submitBtn = document.querySelector('#submit')
let cancelBtn = document.querySelector('#cancel');
let tBody = document.querySelector('#tBody')

let contacts = [
  {
    id: 1256,
    name: "IA Masum",
    phone: "01751161511",
    email: 'imran-dev@outlook.com'
  },
  {
    id: 1257,
    name: "Masum",
    phone: "01751161522",
    email: 'masum-dev@outlook.com'
  }
];

let updatingContact = null;
let actionTr = null;


const addContact = () => {
  let contact = {
    id: Date.now(),
    name: nameField.value,
    email: emailField.value,
    phone: phoneField.value
  }

  contacts.push(contact)
  
  isertContactTotBody(contact);
}

const clearForm = () =>{
  nameField.value = "";
  emailField.value = "";
  phoneField.value = "";
}

const isertContactTotBody = newContact => {

  let {id, name, email, phone} = newContact;

  let tr = document.createElement('tr');
  let th = document.createElement('th');
  let nameTd = document.createElement('td');
  let phoneTd = document.createElement('td');
  let emailTd = document.createElement('td');
  let actionTd = document.createElement('td');
  let editBtn = document.createElement('button');
  let deleteBtn = document.createElement('button');

  th.scope = 'row';
  th.innerHTML = id;
  nameTd.innerHTML = name;
  phoneTd.innerHTML = phone;
  emailTd.innerHTML = email;

  editBtn.className = "btn btn-sm btn-warning";
  editBtn.innerHTML = `<i class="fas fa-edit"></i>`;

  deleteBtn.className = "btn btn-sm btn-danger mx-2";
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;

  actionTd.appendChild(editBtn);
  actionTd.appendChild(deleteBtn);

  tr.appendChild(th);
  tr.appendChild(nameTd);
  tr.appendChild(phoneTd);
  tr.appendChild(emailTd);
  tr.appendChild(actionTd);

  tBody.appendChild(tr)

  editBtn.addEventListener('click', () => {
    editContact(newContact.id , tr);
  } );

  deleteBtn.addEventListener('click', () => {
    deleteContact(newContact.id , tr);
  } );
}

const deleteContact = (contactID, tr) => {

  if(confirm("Are You Sure??")){
  contacts = contacts.filter( c => c.id != contactID);
    tr.remove()
  }
}

const editContact = (contactID, tr) => {
  let contact = contacts.find( c => c.id == contactID )
  let {id, name, email, phone} = contact;

  nameField.value = name;
  emailField.value = email;
  phoneField.value = phone;

  cancelBtn.classList.remove('d-none');
  submitBtn.innerHTML = "Update";
  actionTr = tr;
  updatingContact = contact;

}

const updateContact = () => {
  let updateName = nameField.value;
  let updateEmail = emailField.value;
  let updatePhone = phoneField.value;

  let updatingIndex = contacts.findIndex( c => c.id == updatingContact.id );

  contacts[updatingIndex] = { 
    id: updatingContact.id,
    name: updateName,
    email: updateEmail,
    phone: updatePhone
  }

  actionTr.children[1].innerHTML = updateName;
  actionTr.children[2].innerHTML = updatePhone;
  actionTr.children[3].innerHTML = updateEmail;

  updatingContact = null;
  actionTr = null;

  cancelBtn.classList.add('d-none');
  submitBtn.innerHTML = "Save";
}

contacts.forEach(isertContactTotBody)

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();

  updatingContact = null;
  actionTr = null;
  cancelBtn.classList.add('d-none');
  submitBtn.innerHTML = "Save";
  clearForm()

})


submitBtn.onclick = function (e) {
  e.preventDefault()

  if(updatingContact){
    updateContact();
  }else{
    addContact();
  }

  clearForm();

}
