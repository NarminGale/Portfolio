const texts = ['Designer', 'Developer', 'Freelancer']
const typedText = document.querySelector('.typed-text')
let count = 0
let index = 0
let currentText = ''
let letter = ''

;(function type() {
  if (count === texts.length) {
    count = 0
  }

  currentText = texts[count]
  letter = currentText.slice(0, ++index)
  typedText.textContent = letter

  if (letter.length === currentText.length) {
    count++
    index = 0
  }
  setTimeout(type, 200)
})()
