// prendo dal DOM gli element dei toggler del tema (sun e moon)
const sunBtn = document.getElementById('sun');
const moonBtn = document.getElementById('moon');
// console.log(sunBtn);
// console.log(moonBtn);

// aggancio a questi elementi un Listener che aspetta il click e quando avviene
// fa eseguire la funzione passata come parametro
sunBtn.addEventListener('click', toggleLightTheme);
// moonBtn.addEventListener('click', () => {
//   console.log('sono una arrow function');
// });
moonBtn.addEventListener('click', toggleDarkTheme);

// funzione che abilita il tema light
function toggleLightTheme() {
  // console.log('toggle light theme');
  document.querySelector('nav').className = 'navbar navbar-light bg-light';
  document.querySelector('body').className = '';
}

// funzione che abilita il tema dark
function toggleDarkTheme() {
  //console.log('toggle dark theme');
  // modifico le classi css della navbar
  document.querySelector('nav').className = 'navbar navbar-dark bg-dark';
  document.querySelector('body').className = 'bg-dark text-light';
}
