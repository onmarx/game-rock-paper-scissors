const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const EMPATE = "empate"
const GANASTE = "ganaste"
const PERDISTE = "perdiste"

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const resultText = document.getElementById("result-text")
const userImage = document.getElementById("user-change")
const machineImage = document.getElementById("machine-change")

rockBtn.addEventListener("click", () => {
  playGame(ROCK)
})
paperBtn.addEventListener("click", () => {
  playGame(PAPER)
})
scissorsBtn.addEventListener("click", () => {
  playGame(SCISSORS)
})

function playGame(userOption) {
 
  userImage.src = "img/" + userOption + ".svg"

  const interval = setInterval(function() {
    const machineOption = calcMachineOption()
    machineImage.src = "img/" + machineOption + ".svg"
  }, 100)

  setTimeout(function() {
    clearInterval(interval)
    const machineOption = calcMachineOption()
    machineImage.src = "img/" + machineOption + ".svg"
    const results = calcResultsGame(userOption, machineOption)
    switch(results) {
      case EMPATE:
        resultText.innerHTML = "Tú Empataste!"
        resultText.style.color = "blue"
        break
      case GANASTE: 
        resultText.innerHTML = "Tú Ganaste!"
        resultText.style.color = "green"
        break
      case PERDISTE:
        resultText.innerHTML = "Tú Perdiste!"
        resultText.style.color = "red"
        break
    }
  }, 1000)
  
}

function calcMachineOption() {
  const number = Math.floor(Math.random() * 3)
  switch (number) {
    case 0:
      return ROCK
    case 1: 
      return PAPER
    case 2:
      return SCISSORS
  }
}

function calcResultsGame(userOption, machineOption) {
  if(userOption === machineOption) {
    return resultText.innerHTML = EMPATE
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) {return PERDISTE
    }
    if (machineOption === SCISSORS) return GANASTE
  }
  else if (userOption === PAPER) {
    if (machineOption === ROCK) return GANASTE
    if (machineOption === SCISSORS) return PERDISTE
  }
  else if (userOption === SCISSORS) {
    if (machineOption === PAPER) return GANASTE
    if (machineOption === ROCK) return PERDISTE
  }
}