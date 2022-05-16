const nameInput = document.querySelector('#name');
const form = document.querySelector('#form')
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', resetForm);


function resetForm() {
  form.reset();
  nameInput.blur();
}


