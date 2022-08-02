// prendo dal document l'element form
const form = document.getElementById('form');

// alla form aggancio il Listener per il submit
form.addEventListener('submit', addItem);

// funzione che aggiunge un elemento alla lista con valore dell'input
function addItem(event) {
  // intercetto l'evento e prevengo il comportamento di default
  event.preventDefault();
  // leggo il valore dell'input
  const textValue = document.getElementById('text-input').value;
  console.log(textValue);
  //   const div = document.getElementById('text-value');
  //   div.innerHTML = textValue;

  // aggiungo un li con il valore dell'input
  // prendo il contenitore ul
  const ul = document.getElementById('items');
  // creo un elemento li
  const li = document.createElement('li');
  li.innerHTML = textValue;
  // aggiungo li a ul
  ul.appendChild(li);
}
