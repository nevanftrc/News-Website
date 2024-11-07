const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

open.addEventListener('click', () => modal.classList.add('show-modal'));
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false);

// new
function submitForm() {
  // Retrieve form values
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const theme = document.getElementById("theme").value;
  const message = document.getElementById("message").value;
  const timestamp = document.getElementById("timestamp").value;
  const list = document.getElementById("list").value;

  // Simple validation
  if (!name || !surname || !email || !theme || !message || !timestamp || !list) {
    alert("Please fill out all required fields.");
    return;
  }

  // Update table with form values
  document.getElementById("tableName").innerText = name;
  document.getElementById("tableSurname").innerText = surname;
  document.getElementById("tableEmail").innerText = email;
  document.getElementById("tableTheme").innerText = theme;
  document.getElementById("tableTimestamp").innerText = timestamp;

  // Confirmation message
  alert("Form submitted successfully!");
}
