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

