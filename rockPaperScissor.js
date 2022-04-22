const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') ? userInput : console.log('Error! Invalid Entry');
  }
  function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    } else {
          console.log('Error!, Computer can\'t seem to pick');
    }
  }

  function determineWinner(userChoice, computerChoice){
    if (userChoice === 'bomb') {
      console.log('you win!')

    } else if 
      (userChoice === computerChoice) {
        console.log('tie!')

    } else if 
      (userChoice === 'rock' && computerChoice !== 'paper') {
        console.log('you win!')

    } else if 
      (userChoice === 'paper' && computerChoice !== 'scissors') {
        console.log('you win!')

    } else if 
      (userChoice === 'scissors' && computerChoice !== 'rock') {
        console.log('you win!')

    } else {
      console.log('you lose!')

    }

  }

 userChoice = getUserChoice('scissors')
 console.log(`You picked ${userChoice}`)
 computerChoice = getComputerChoice()
 console.log(`Computer picked ${computerChoice}`)
 determineWinner(userChoice, computerChoice)