let scoreHome = 0
let scoreGuest = 0
let counterElHome = document.getElementById("score-home")
let counterElGuest = document.getElementById("score-guest")


function plus1Home() {
    scoreHome += 1;
    counterElHome.textContent = scoreHome
    highlightWinner();
}

function plus2Home() {
    scoreHome += 2;
    counterElHome.textContent = scoreHome
    highlightWinner();
}

function plus3Home() {
    scoreHome += 3;
    counterElHome.textContent = scoreHome
    highlightWinner();
}

// ----- Guest -------
function plus1Guest() {
    scoreGuest += 1;
    counterElGuest.textContent = scoreGuest
    highlightWinner();
}

function plus2Guest() {
    scoreGuest += 2;
    counterElGuest.textContent = scoreGuest
    highlightWinner();
}

function plus3Guest() {
    scoreGuest += 3;
    counterElGuest.textContent = scoreGuest
    highlightWinner();
}

function newGame(){
    scoreHome = 0
    scoreGuest = 0
    counterElHome.textContent = scoreHome
    counterElGuest.textContent = scoreGuest
    
    // Remove winner class
    let homeScoreCard = document.querySelectorAll('.score')[0];
    let guestScoreCard = document.querySelectorAll('.score')[1];
    homeScoreCard.classList.remove('winner');
    guestScoreCard.classList.remove('winner');
}

function highlightWinner() {
    // Get both scorecards
    let homeScoreCard = document.querySelectorAll('.score')[0];
    let guestScoreCard = document.querySelectorAll('.score')[1];

    // Remove winner class from both
    homeScoreCard.classList.remove('winner');
    guestScoreCard.classList.remove('winner');

    // Add winner class to the one with a higher score
    if (scoreHome > scoreGuest) {
        homeScoreCard.classList.add('winner');
    } else if (scoreGuest > scoreHome) {
        guestScoreCard.classList.add('winner');
    }
}
