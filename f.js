let userChosen;
let computerChosen;
var result = results();
const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll('.choices');
const choice = document.querySelectorAll('choice p');
let pScore = 0;
let cScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id
    generateComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * (4));
    if(randomNumber === 1) {
        return computerChosen = 'rock';
    }else if (randomNumber === 2) {
        return computerChosen = 'paper';
    }else if (randomNumber === 3) {
        return computerChosen = 'scissors'
    }else {
        return computerChosen = 'rock'
    }
    
}
const updateScore = () => {
    const playerScore = document.querySelector('.userC p');
    const computerScore = document.querySelector('.compC p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

function results() {
    if(computerChosen === userChosen){
        return result = 'it is a tie'
    }else if(computerChosen === 'rock' && userChosen === 'paper') {
        result = 'you win'
        pScore++;
        updateScore();
        return 
    }else if(computerChosen ==='rock' && userChosen === 'scissors') {
        result = 'you lost'
        cScore++;
        updateScore();
        return 
    }else if(computerChosen ==='paper' && userChosen === 'rock'){
        result = 'you lost'
        cScore++;
        updateScore();
        return 
    }else if(computerChosen ==='paper' && userChosen === 'scissors'){
        result = 'you win'
        pScore++;
        updateScore();
        return 
    }else if(computerChosen ==='scissors' && userChosen === 'rock'){
        result = 'you win'
        pScore++;
        updateScore();
        return 
    }else if(computerChosen ==='scissors' && userChosen === 'paper'){
        result = 'you lost'
        cScore++;
        updateScore();
        return 
    }
}

