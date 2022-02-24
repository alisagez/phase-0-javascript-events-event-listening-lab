
const input = document.getElementById('input');
 
function addingEventListener() {
  alert('I was clicked!');
  return input.addEventListener('click', addingEventListener)
}
 
