const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
const span4 = document.querySelector('.span4')
const bg_box1 = document.querySelector('.box1')
const bg_box2 = document.querySelector('.box2')


/*player par défaut */
let playerActif = 'player1';
span2.style.display = 'none'
span3.style.display = 'none'
bg_box2.style.background = 'none'
bg_box1.style.border = 'none'

const imgDe = document.querySelector('.de')
const btn_tir_de = document.querySelector('.btn-tir')

let score = 0;
let scoreTotal1 = 0;
let scoreTotal2 = 0;
const scoreInt1 = document.querySelector('.score-int1')
const scoreInt2 = document.querySelector('.score-int2')

const hold = document.querySelector('.hold')

const score_total1 = document.querySelector('.score-total1')
const score_total2 = document.querySelector('.score-total2')

const win = document.querySelector('.win')

const btn_newGame = document.querySelector('.new')


/******** Evenements Action sur le DOM *************************/

/*btn du dé, la source de l'image change à chaque clique et ajoute la valeur au score int*/
btn_tir_de.addEventListener("click", () => {
  addScoreInt() 
  deOn()
});

hold.addEventListener('click', () => {
  changePlayer()
  addScoreTotal()
  winGame()
})

btn_newGame.addEventListener('click', ()=> {
  remiseZeroTotal()
})



/******** Fonction *************************/


/*remise à zero */
function remiseZeroTotal() {
  score = 0
  scoreTotal1 = 0;
  scoreTotal2 = 0;
  scoreInt1.innerHTML = 0
  scoreInt2.innerHTML = 0
  score_total1.innerHTML = 0
  score_total2.innerHTML = 0
  imgDe.src = "./images/1.png";  
  win.style.display = 'none'
  playerActif = 'player1'
}
/*quand le jouer gagne */

function winGame(winner) {
  if(score_total1.textContent >= 10) {
    win.style.opacity = '1'
    win.innerHTML = 'Le player 1 a gagné !'
  }
  if(score_total2.textContent >= 10) {
    win.style.opacity = '1'
    win.innerHTML = 'Le player 2 a gagné !'
  }
}
/*changement de player */
function changePlayer() {
  if (playerActif == 'player1') {
    playerActif = 'player2'
  } else {
    playerActif = 'player1'
  }
  changeDisplay()
}

/*changement du visuel */
function changeDisplay() {

  if (playerActif == 'player1') {
    span1.style.display = 'block'
    span2.style.display = 'none'
    span3.style.display = 'none'
    span4.style.display = 'block'
    bg_box2.style.background = 'none'
    bg_box1.style.background = 'rgba(255, 255, 255, 0.25)'
  } else {
    span1.style.display = 'none'
    span2.style.display = 'block'
    span3.style.display = 'block'
    span4.style.display = 'none'
    bg_box2.style.background = 'rgba(255, 255, 255, 0.25)'
    bg_box1.style.background = 'none'
  }
}
/*ajout des points au score int */
let randomNumber
function addScoreInt() {
  randomNumber = Math.floor(Math.random() * 6) + 1
  imgDe.src = './images/' + randomNumber + '.png'
  score += randomNumber;
  if (playerActif == 'player1') {
    scoreInt1.textContent = score
  } else if (playerActif == 'player2') {
    scoreInt2.textContent = score
  }
}

/*ajout du score int au score total*/
function addScoreTotal() {
  if (playerActif == 'player2') {
    scoreTotal1  += score
    score_total1.textContent = scoreTotal1
    scoreInt1.textContent = '0 '
    score = 0
  } else {
    scoreTotal2  += score
    score_total2.textContent = scoreTotal2
    scoreInt2.textContent = '0 ' 
    score = 0
  }
}

/*quand le de tombe sur 1*/
function deOn() {
  if( randomNumber == '1') {
    if(playerActif == 'player1') {
      scoreInt1.textContent = '0'
      changePlayer()
      score = 0
    } else {
      scoreInt2.textContent = '0'
      changePlayer()
      score = 0
    }
  }
} 


