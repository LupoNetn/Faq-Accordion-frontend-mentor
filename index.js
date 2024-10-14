const displayButton = document.querySelectorAll('.icon-btn');
const hiddenButton = document.querySelectorAll('.hidden-btn');
const headerButton = document.querySelectorAll('h2');
const answer = document.querySelectorAll('.accordion-answer')

displayButton.forEach((displaybtn) => {
  displaybtn.addEventListener('click', () => {
    displaybtn.closest('.accordion-body-flex').nextElementSibling.classList.toggle('accordion-answer');
    displaybtn.nextElementSibling.classList.remove('hidden');
    displaybtn.classList.toggle('hidden')
  });
});

hiddenButton.forEach((hiddenbtn) => {
  hiddenbtn.addEventListener('click', () => {
    hiddenbtn.closest('.accordion-body-flex').nextElementSibling.classList.add('accordion-answer')
    hiddenbtn.classList.toggle('hidden')
    hiddenbtn.previousElementSibling.classList.remove('hidden')

  })

});

headerButton.forEach((headerbtn) => {
  headerbtn.addEventListener('click', () => {
    headerbtn.closest('.accordion-body-flex').nextElementSibling.classList.toggle('accordion-answer');
    headerbtn.nextElementSibling.classList.toggle('hidden');
    headerbtn.nextElementSibling.nextElementSibling.classList.toggle('hidden')
  })


});