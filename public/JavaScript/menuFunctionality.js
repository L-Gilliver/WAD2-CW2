function hideEmptySpecials() {
  const x = document.querySelector('specials-content');
  /* check if all elements in div are empty*/
  [].forEach.call(x, function hideEmptySpecials(x) {
    if (specialsContainer.textContent().length === 0) {
      console.log(' Element is empty');
      specialsContainer.style.display = "none"
    } else {
      console.log(' Element is NOT empty');
    }
  })
}

/* loop through
if active = true {
  show remove button
}
else show add button
*/

const specialStarters = document.querySelectorAll('.specialStarters');
const recipe = document.querySelectorAll('.recipe');

for (var i = 0; i < specialStarters.length; i++) {
  console.log('specialStarters: ', specialStarters[i]);

  if (recipe == true) {
    removeBtn.style.display = "block";
    addBtn.style.display = "none";
  }
  else {
    removeBtn.style.display = "none";
    addBtn.style.display = "block";
  }
}