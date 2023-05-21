const computerChoices = ["Rock", "Paper", "Scissors"]
const playerInput = document.querySelector(".playerInput")
const player = document.querySelector(".playerScore")
const computer = document.querySelector(".computerScore")
const computerInput = document.querySelector(".computerInput")
const gameStatus = document.querySelector(".results p")
const buttons = Array.from(
  document.querySelectorAll(".button-container button")
)
const compImg = document.querySelector(".computer-image")
const reset = document.querySelector(".reset button")
const winner = document.querySelector(".winner")
let result
let playerScore = 0
let computerScore = 0
reset.setAttribute("disabled", "")

player.innerHTML = playerScore
computer.innerHTML = computerScore

buttons.map((button) => {
  button.addEventListener("click", () => {
    switch (button.value) {
      case "Rock":
        reset.removeAttribute("disabled", "")
        playerInput.value = button.value
        computerTurn()
        break
      case "Paper":
        reset.removeAttribute("disabled", "")
        playerInput.value = button.value
        computerTurn()
        break
      case "Scissors":
        reset.removeAttribute("disabled", "")
        playerInput.value = button.value
        computerTurn()
        break
      default:
        break
    }
  })
})

function computerTurn() {
  let i = Math.floor(Math.random() * computerChoices.length)
  computerInput.value = computerChoices[i]
  if (computerInput.value === "Rock") {
    compImg.classList.add("rock-image")
    compImg.classList.remove("paper-image")
    compImg.classList.remove("scissors-image")
  }
  if (computerInput.value === "Paper") {
    compImg.classList.add("paper-image")
    compImg.classList.remove("rock-image")
    compImg.classList.remove("scissors-image")
  }
  if (computerInput.value === "Scissors") {
    compImg.classList.add("scissors-image")
    compImg.classList.remove("rock-image")
    compImg.classList.remove("paper-image")
  }
  setResult()
}

function setResult() {
  // Rock //
  if (playerInput.value == "Rock" && computerInput.value == "Rock") {
    gameStatus.style.color = "Grey"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Draw!"
  }
  if (playerInput.value == "Rock" && computerInput.value == "Paper") {
    computerScore = computerScore + 1
    computer.innerHTML = computerScore
    gameStatus.style.color = "red"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Computer Won!"
    setWinner()
  }
  if (playerInput.value == "Rock" && computerInput.value == "Scissors") {
    playerScore = playerScore + 1
    player.innerHTML = playerScore
    gameStatus.style.color = "greenyellow"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Player Won!"
    setWinner()
  }
  // Paper //
  if (playerInput.value == "Paper" && computerInput.value == "Rock") {
    playerScore = playerScore + 1
    player.innerHTML = playerScore
    gameStatus.style.color = "greenyellow"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Player Won!"
    setWinner()
  }
  if (playerInput.value == "Paper" && computerInput.value == "Paper") {
    gameStatus.style.color = "Grey"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Draw!"
  }
  if (playerInput.value == "Paper" && computerInput.value == "Scissors") {
    computerScore = computerScore + 1
    computer.innerHTML = computerScore
    gameStatus.style.color = "red"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Computer Won!"
    setWinner()
  }
  // Scissors //
  if (playerInput.value == "Scissors" && computerInput.value == "Scissors") {
    gameStatus.style.color = "Grey"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Draw!"
  }
  if (playerInput.value == "Scissors" && computerInput.value == "Paper") {
    playerScore = playerScore + 1
    player.innerHTML = playerScore
    gameStatus.style.color = "greenyellow"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Player Won!"
    setWinner()
  }
  if (playerInput.value == "Scissors" && computerInput.value == "Rock") {
    computerScore = computerScore + 1
    computer.innerHTML = computerScore
    gameStatus.style.color = "red"
    gameStatus.style.fontSize = "30px"
    gameStatus.innerHTML = "Computer Won!"
    setWinner()
  }
}

reset.addEventListener("click", () => {
  reset.setAttribute("disabled", "")
  gameStatus.innerHTML = ""
  computerInput.value = ""
  playerInput.value = ""
  playerScore = 0
  computerScore = 0
  player.innerHTML = playerScore
  computer.innerHTML = computerScore
  compImg.classList.add("intro-image")
  compImg.classList.remove("paper-image")
  compImg.classList.remove("rock-image")
  compImg.classList.remove("scissors-image")
  winner.style.display = "none"
  winner.innerHTML = ""
  winner.classList.remove("winner-player")
  winner.classList.remove("winner-computer")
  buttons.map((button) => {
    button.classList.remove("disabled")
  })
})

function setWinner() {
  if (playerScore === 3) {
    winner.style.display = "flex"
    winner.innerHTML = "Player 1 Won!"
    winner.classList.add("winner-player")
    gameStatus.innerHTML = ""
    buttons.map((button) => {
      button.classList.add("disabled")
    })
  }
  if (computerScore === 3) {
    winner.style.display = "flex"
    winner.innerHTML = "Computer Won!"
    winner.classList.add("winner-computer")
    gameStatus.innerHTML = ""
    buttons.map((button) => {
      button.classList.add("disabled")
    })
  }
}
