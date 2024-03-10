const input = document.getElementById('myInput');

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    console.log('La touche "Entrée" a été pressée !');
    console.log(input.value)
  }
});

const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');

parent.addEventListener('click', function() {
  console.log('Parent');
});

enfant.addEventListener('click', function() {
  console.log('Enfant');
  event.stopPropagation();
});