const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const submitButton = document.querySelector('.submit-btn');
const form = document.getElementById('signupForm');

// Öffnen des Modals beim Klicken auf den Anmelden-Button
open.addEventListener('click', () => {
  modal.classList.add('show-modal');
  // Zurücksetzen der Formulardaten beim Öffnen des Modals
  form.reset();
});

// Schließen des Modals beim Klicken auf den Schließen-Button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Schließen des Modals beim Klicken außerhalb des Modals
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show-modal');
  }
});

// Funktion zur Validierung und zum Absenden des Formulars
function submitForm() {
  // Abrufen der Eingabefelder aus dem Formular
  const nameField = document.getElementById("name");
  const surnameField = document.getElementById("surname");
  const phoneField = document.getElementById("phone");
  const emailField = document.getElementById("email");
  const timestampField = document.getElementById("timestamp");

  // Zurücksetzen der benutzerdefinierten Validierungsnachrichten
  nameField.setCustomValidity('');
  surnameField.setCustomValidity('');
  phoneField.setCustomValidity('');
  emailField.setCustomValidity('');
  timestampField.setCustomValidity('');

  // Überprüfen, ob die Felder ausgefüllt sind und ob sie die Anforderungen erfüllen
  let valid = true;

  // Validierung des Namensfelds
  if (!nameField.value.trim()) {
    nameField.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
    valid = false;
  }

  // Validierung des Nachnamensfelds
  if (!surnameField.value.trim()) {
    surnameField.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
    valid = false;
  }

  // Validierung des Telefonnummernfelds
  if (!phoneField.value.trim()) {
    phoneField.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
    valid = false;
  } else if (!/^\+?\d{7,15}$/.test(phoneField.value.trim())) {
    phoneField.setCustomValidity('Bitte geben Sie eine gültige Telefonnummer ein (z.B. +491234567890).');
    valid = false;
  }

  // Validierung des E-Mail-Felds
  if (!emailField.value.trim()) {
    emailField.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
    emailField.setCustomValidity('Bitte geben Sie eine gültige E-Mail-Adresse ein (z.B. name@domain.ch).');
    valid = false;
  }

  // Validierung des Geburtsdatumsfelds
  if (!timestampField.value.trim()) {
    timestampField.setCustomValidity('Bitte füllen Sie dieses Feld aus.');
    valid = false;
  } else {
    const timestampDate = new Date(timestampField.value);
    const currentDate = new Date();
    if (timestampDate > currentDate) {
      timestampField.setCustomValidity('Das Geburtsdatum muss in der Vergangenheit liegen.');
      valid = false;
    }
  }

  // Anzeigen von Fehlermeldungen, falls vorhanden
  if (!valid) {
    nameField.reportValidity();
    surnameField.reportValidity();
    phoneField.reportValidity();
    emailField.reportValidity();
    timestampField.reportValidity();
    return;
  }

  // Temporäre Bestätigungsnachricht anzeigen
  const popup = document.createElement('div');
  popup.innerText = "Registrierung erfolgreich gesendet!";
  popup.style.position = 'fixed';
  popup.style.top = '20px';
  popup.style.right = '20px';
  popup.style.padding = '10px';
  popup.style.backgroundColor = '#4CAF50';
  popup.style.color = 'white';
  popup.style.borderRadius = '5px';
  popup.style.zIndex = '1000';
  document.body.appendChild(popup);

  // Entfernen der Bestätigungsnachricht nach 3 Sekunden
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 3000);

  // Schließen des Modals
  modal.classList.remove('show-modal');

  // Formular zurücksetzen
  form.reset();
}

// Zuweisung der submitForm-Funktion an den Submit-Button
submitButton.addEventListener('click', submitForm);
