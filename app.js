const form = document.querySelector('form')
const wordDiv = document.querySelector('.word')
const input = document.querySelector('input')
const remainingLives = document.querySelector('.lives')
const wordsPool = ['vis', 'programare', 'wellcode', 'javascript']
const usedLetters = document.querySelector('.used-letters')
let chosenWord = wordsPool[Math.floor(Math.random() * 3)]
let remainingLivesCounter = 7
let rightWords = 0
console.log(chosenWord)
console.log(chosenWord.charAt(0))

for (let i = 0; i < chosenWord.length; i++) {
  const letter = document.createElement("span")
  letter.innerText = " _"
  wordDiv.appendChild(letter)
}

const individualLetters = document.querySelectorAll('.word>span')
console.log(individualLetters)

form.addEventListener("submit", e => {
  e.preventDefault()
  let answer = false
  let fullAnswer = false
  if (input.value.length == 1) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (input.value == chosenWord.charAt(i)) {
        individualLetters[i].innerText = chosenWord.charAt(i)
        answer = true
        rightWords++
      } 
    }
  } else {
    let wholeWord = 0
    for (let i = 0; i < input.value.length; i++) {
      if (input.value.charAt(i) == chosenWord.charAt(i)) {
        wholeWord++
      } else {
        break
      }
    }
    if (wholeWord == chosenWord.length) {
      alert("Congratulations! You didn't hang.")
    }
  }
  
  if (answer == false) {
    remainingLivesCounter--
    remainingLives.innerText = remainingLivesCounter
    if (remainingLivesCounter == 0) {
      alert("GAME OVER! You died.")
    }
  }
  if (rightWords == chosenWord.length) {
    alert("Congratulations! You didn't hang!")
  }
  let letterList = document.createElement("span")
  letterList.innerText = " " + input.value
  usedLetters.appendChild(letterList)
})

