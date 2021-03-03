// const texts = ['Designer', 'Developer', 'Freelancer']
// const typedText = document.querySelector('.typed-text')
// let count = 0
// let index = 0
// let currentText = ''
// let letter = ''

// ;(function type() {
//   if (count === texts.length) {
//     count = 0
//   }

//   currentText = texts[count]
//   letter = currentText.slice(0, ++index)
//   typedText.textContent = letter

//   if (letter.length === currentText.length) {
//     count++
//     index = 0
//   }
//   setTimeout(type, 200)
// })()
const texts = ['Designer', 'Developer', 'Freelancer']
const typedText = document.querySelector('.typed-text')

let index = 0
let isAdding = true
let textsIndex = 0

function playAnim() {
  setTimeout(
    function () {
      typedText.innerText = texts[textsIndex].slice(0, index)

      if (isAdding) {
        if (index > texts[textsIndex].length) {
          isAdding = false
          setTimeout(function () {
            playAnim()
          }, 500)
          return
        } else {
          index++
        }
      } else {
        if (index === 0) {
          isAdding = true
          textsIndex = (textsIndex + 1) % texts.length
        } else {
          index--
        }
      }
      playAnim()
    },
    isAdding ? 120 : 30
  )
}

playAnim()
