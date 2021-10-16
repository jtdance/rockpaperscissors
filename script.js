
const handOptions = {
    'rock': '/assets/Rock.png',
    'paper': '/assets/Paper.png',
    'scissors': '/assets/scissors.png'
}

let score = 0;

const pickUserHand = (hand) => {
    //show new div with hand picked, hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //set user pick
    document.getElementById('userPickImage').src = handOptions[hand];
    
    let randomPick = pickComputerHand();
    referee(hand, randomPick);
}

const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors'];
    let randomPick = hands[Math.floor(Math.random() * hands.length)]
    
    document.getElementById('computerPickImage').src = handOptions[randomPick];
    return randomPick
}


const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(score += 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(score += 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(score += 1);
    }
};

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const setDecision = (decision) => {
    document.querySelector('.decision h1').innerText = decision;
}

const setScore = (score) => {
    document.querySelector('.score h1').innerText = score;
}   

