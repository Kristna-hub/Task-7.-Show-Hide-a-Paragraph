const toggleCheckbox = document.getElementById('toggle');
const paragraph = document.getElementById('paragraph');

toggleCheckbox.addEventListener('change', function() {
  if (toggleCheckbox.checked) {
    paragraph.style.display = 'block';
  } else {
    paragraph.style.display = 'none';
  }
});
