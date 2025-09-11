const forms = document.querySelectorAll('.needs-validation')

let id = 0;

const loginForm = document.getElementById('submit')
const tableBody = document.getElementById('tbody')
const counter = document.getElementById('counter')

loginForm.addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const country = document.getElementById('country');
  const check = document.getElementById('same-address');

  
  if (
    firstName.value === '' || 
    lastName.value === '' || 
    email.value === '' || 
    country.value === 'Choose...'
  ) {
    alert("Rellene todos los campos");
    return;
  }

  id++;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${id}</td>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${country.value}</td>
    <td>${check.checked ? "Sí" : "No"}</td>
  `;

  tableBody.appendChild(row);

  counter.innerHTML = id;
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  country.value = 'Choose...';
  check.checked = false;
});



