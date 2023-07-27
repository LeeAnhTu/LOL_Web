var icon = document.querySelector('.material-symbols-outlined');
var input = document.querySelector('input[type="text"]');

icon.addEventListener('click', function() {
  input.classList.toggle('active');
});