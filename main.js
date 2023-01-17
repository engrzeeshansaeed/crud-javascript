let selectedRow = null;

function onFormSubmit() {
  let userData = getFormData();

  // Check username greater than 10 character and age is greater than 20 years
  if (userData.firstname.length >= 10 || userData.lastname.length >= 10) {
    alert('Username must be 10 character long!');
    return;
  } else if (userData.age <= 20) {
    alert('Age must be greater than 20!');
    return;
  }

  if (selectedRow == null) {
    insertNewRecord(userData);
  } else {
    updateData(userData);
  }
  resetForm();
}

// Get user input Form Data
function getFormData() {
  let userData = {};
  userData['firstname'] = document.getElementById('firstname').value;
  userData['lastname'] = document.getElementById('lastname').value;
  userData['email'] = document.getElementById('email').value;
  userData['age'] = document.getElementById('age').value;
  userData['phone'] = document.getElementById('phone').value;
  return userData;
}

// Insert new Record into table
function insertNewRecord(data) {
  let table = document.getElementById('table').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);
  cell2 = newRow.insertCell(1);
  cell3 = newRow.insertCell(2);
  cell4 = newRow.insertCell(3);
  cell5 = newRow.insertCell(4);
  cell6 = newRow.insertCell(5);

  cell1.innerHTML = data.firstname;
  cell2.innerHTML = data.lastname;
  cell3.innerHTML = data.email;
  cell4.innerHTML = data.age;
  cell5.innerHTML = data.phone;
  cell6.innerHTML = `<a href="#" class="edit" onClick="editData(this)">Edit</a><a href="#" class="delete" onClick="deleteData(this)">Delete</a>`;
}

// Reset form after insert data into table
function resetForm() {
  document.getElementById('firstname').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('age').value = '';
  document.getElementById('phone').value = '';
  selectedRow = null;
}

// Edit table data
function editData(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('firstname').value = selectedRow.cells[0].innerHTML;
  document.getElementById('lastname').value = selectedRow.cells[1].innerHTML;
  document.getElementById('email').value = selectedRow.cells[2].innerHTML;
  document.getElementById('age').value = selectedRow.cells[3].innerHTML;
  document.getElementById('phone').value = selectedRow.cells[4].innerHTML;
}

// Update Table Data
function updateData(userData) {
  selectedRow.cells[0].innerHTML = userData.firstname;
  selectedRow.cells[1].innerHTML = userData.lastname;
  selectedRow.cells[2].innerHTML = userData.email;
  selectedRow.cells[3].innerHTML = userData.age;
  selectedRow.cells[4].innerHTML = userData.phone;
}

// Delete Table Data
function deleteData(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById('table').deleteRow(row.rowIndex);
    resetForm();
  }
}
