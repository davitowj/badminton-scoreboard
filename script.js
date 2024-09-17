let player1Score = 0;
let player2Score = 0;
let player1Sets = 0;
let player2Sets = 0;
const initialWinningScore = 21; 
const finalWinningScore = 30;   
const winningSets = 2;          

function increaseScore(player) {
    if (player === 'player1') {
        player1Score++;
        updateScore('player1Score', player1Score);
    } else {
        player2Score++;
        updateScore('player2Score', player2Score);
    }
    checkSetWinner(); 
}

function decreaseScore(player) {
    if (player === 'player1' && player1Score > 0) {
        player1Score--;
        updateScore('player1Score', player1Score);
    } else if (player === 'player2' && player2Score > 0) {
        player2Score--;
        updateScore('player2Score', player2Score);
    }
}

function updateScore(elementId, score) {
    document.getElementById(elementId).innerText = score;
}

function checkSetWinner() {

    if (player1Score >= finalWinningScore || player2Score >= finalWinningScore) {
        
        if (player1Score > player2Score && player1Score >= initialWinningScore) {
            player1Sets++;
            document.getElementById('player1Sets').innerText = `Sets Won: ${player1Sets}`;
            resetScores(); 
        } else if (player2Score > player1Score && player2Score >= initialWinningScore) {
            player2Sets++;
            document.getElementById('player2Sets').innerText = `Sets Won: ${player2Sets}`;
            resetScores(); 
        }
    } else if (player1Score >= initialWinningScore && (player1Score - player2Score) >= 2) {
        
        player1Sets++;
        document.getElementById('player1Sets').innerText = `Sets Won: ${player1Sets}`;
        resetScores(); 
    } else if (player2Score >= initialWinningScore && (player2Score - player1Score) >= 2) {
        player2Sets++;
        document.getElementById('player2Sets').innerText = `Sets Won: ${player2Sets}`;
        resetScores(); 
    }

    checkMatchWinner();
}

function checkMatchWinner() {
    if (player1Sets === winningSets) {
        alert('Player 1 wins the match!');
        resetAll();
    } else if (player2Sets === winningSets) {
        alert('Player 2 wins the match!');
        resetAll();
    }
}

function resetScores() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1Score').innerText = player1Score;
    document.getElementById('player2Score').innerText = player2Score;
}

function resetAll() {
    resetScores();
    player1Sets = 0;
    player2Sets = 0;
    document.getElementById('player1Sets').innerText = `Sets Won: ${player1Sets}`;
    document.getElementById('player2Sets').innerText = `Sets Won: ${player2Sets}`;
}
