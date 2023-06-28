const Score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
}

let isautoplay = false;

document.querySelector('.js-scores').innerHTML = `Wins: ${Score.Wins}, Losses: ${Score.Losses}, Ties: ${Score.Ties}`;

// setInterval() function will return ID that can use to stop function
setInterval(function() {
  if(isautoplay) {
    const rand_move = randMove();
    play(rand_move);
  }
},1000)

function auto_play() {
  isautoplay = !isautoplay;
  if(isautoplay)
    document.querySelector('.js-auto-play').innerHTML = 'Stop Play'
  else
  document.querySelector('.js-auto-play').innerHTML = 'Auto Play'
}

function play(playerMove) {
  const computerMove = randMove();
  let result = '';

  if(playerMove === 'Rock') {
    if(computerMove === 'Rock')
      result = 'Tie.';
    if(computerMove === 'Paper')
      result = 'You lose.';
    if(computerMove === 'Scissors')
      result = 'You win.'
  }
  if(playerMove === 'Paper') {
    if(computerMove === 'Rock')
      result = 'You win.';
    if(computerMove === 'Paper')
      result = 'Tie.';
    if(computerMove === 'Scissors')
      result = 'You lose.'
  }
  if(playerMove === 'Scissors') {
    if(computerMove === 'Rock')
      result = 'You lose.';
    if(computerMove === 'Paper')
      result = 'You win.';
    if(computerMove === 'Scissors')
      result = 'Tie.'
  }

  document.querySelector('.js-result').innerHTML = result;
  let showMove = 'You\n'
  if(playerMove === 'Rock')
    showMove += '<img class="img-button js-playerMove" src="IMG/rock-emoji.png">';
  if(playerMove === 'Paper')
    showMove += '<img class="img-button js-playerMove" src="IMG/paper-emoji.png">';
  if(playerMove === 'Scissors')
    showMove += '<img class="img-button js-playerMove" src="IMG/scissors-emoji.png">';

  showMove +='\n';

  if(computerMove === 'Rock')
    showMove += '<img class="img-button js-playerMove" src="IMG/rock-emoji.png">';
  if(computerMove === 'Paper')
    showMove += '<img class="img-button js-playerMove" src="IMG/paper-emoji.png">';
  if(computerMove === 'Scissors')
    showMove += '<img class="img-button js-playerMove" src="IMG/scissors-emoji.png">';
  
  showMove += '\nComputer'

  document.querySelector('.js-moves').innerHTML = showMove;

  if(result === 'You win.')
    Score.Wins++;
  if(result === 'You lose.')
    Score.Losses++;
  if(result === 'Tie.')
    Score.Ties++;
  
  localStorage.setItem('score',JSON.stringify(Score));
  document.querySelector('.js-scores').innerHTML = `Wins: ${Score.Wins}, Losses: ${Score.Losses}, Ties: ${Score.Ties}`;
}

function randMove() {
  const rand = Math.random();
  if(rand < 1/3)
    return 'Rock';
  if(rand < 2/3)
    return 'Paper';
  return 'Scissors';
}

function resetScore() {
  Score.Wins = 0;
  Score.Losses = 0;
  Score.Ties = 0;
  localStorage.setItem('score',JSON.stringify(Score));
  document.querySelector('.js-scores').innerHTML = `Wins: ${Score.Wins}, Losses: ${Score.Losses}, Ties: ${Score.Ties}`;
}