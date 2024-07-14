function getComputerChoice () {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0: 
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case "e":
      return
  }
}

function getHumanChoice () {
  while (true) {
    const humanChoice = window.prompt("Enter 0 for rock, 1 for paper, 2 for scissors: ")
    switch (humanChoice) {
      case 0: 
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
}

function playRound () {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

}

console.log(getComputerChoice())
getHumanChoice()

str.split('').reverse().join('');
