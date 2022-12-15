'use strict';

let currPlayer = '1';
let maxScore = 20;
let plo = "PLAYER 1";
let plt = "PLAYER 2";

const pressNew = document.querySelector('.newGame');
const pressRoll = document.querySelector('.roll');
const pressHold = document.querySelector('.hold');

function startGame() {

    console.log("YES");
    let left = document.querySelector('.lsec');
    let right = document.querySelector('.rsec');

    if (left.classList.contains('playerActive')) left.classList.remove('playerActive');
    if (right.classList.contains('playerActive')) right.classList.remove('playerActive');

    document.querySelector('.totalo').textContent = '0';
    document.querySelector('.totalt').textContent = '0';
    document.querySelector('.curro').textContent = '0';
    document.querySelector('.currt').textContent = '0';

    plo = prompt("Enter the Name of Player 1");
    plt = prompt("Enter the Name of Player 2");
    currPlayer = prompt("who will start the game first");
    maxScore = prompt("Enter the winning score");

    document.querySelector('.pnameo').textContent = plo;
    document.querySelector('.pnamet').textContent = plt;

    if (currPlayer === '1') left.classList.add('playerActive');
    else right.classList.add('playerActive');
}

function rollDice() {
    let rolledNum = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.image').src = `dice-${rolledNum}.png`;

    if (currPlayer === '1') {
        if (rolledNum === 1) {
            document.querySelector('.totalo').textContent = (Number)(0);
            document.querySelector('.curro').textContent = (Number)(0);
            currPlayer = '2';
            document.querySelector('.lsec').classList.remove('playerActive');
            document.querySelector('.rsec').classList.add('playerActive');
        }

        if (rolledNum != 1) {
            document.querySelector('.curro').textContent = rolledNum;
            let prev = (Number)(document.querySelector('.totalo').textContent);
            prev += rolledNum;
            document.querySelector('.totalo').textContent = String(prev);

            if (prev >= maxScore) {
                alert(`${plo} won the game`);
                document.querySelector('.totalo').textContent = (Number)(0);
                document.querySelector('.curro').textContent = (Number)(0);

                document.querySelector('.totalt').textContent = (Number)(0);
                document.querySelector('.currt').textContent = (Number)(0);
            }
        }
    }

    else {
        if (rolledNum === 1) {
            document.querySelector('.totalt').textContent = (Number)(0);
            document.querySelector('.currt').textContent = (Number)(0);
            currPlayer = '1';
            document.querySelector('.rsec').classList.remove('playerActive');
            document.querySelector('.lsec').classList.add('playerActive');

        }

        if (rolledNum != 1) {
            document.querySelector('.currt').textContent = rolledNum;
            let prev = (Number)(document.querySelector('.totalt').textContent);
            prev += rolledNum;
            document.querySelector('.totalt').textContent = String(prev);

            if (prev >= maxScore) {
                alert(`${plt} won the game`);
                document.querySelector('.totalt').textContent = (Number)(0);
                document.querySelector('.currt').textContent = (Number)(0);

                document.querySelector('.totalo').textContent = (Number)(0);
                document.querySelector('.curro').textContent = (Number)(0);
            }
        }
    }
}

function holdGame() {
    if (currPlayer === '1') {
        document.querySelector('.lsec').classList.remove('playerActive');
        document.querySelector('.rsec').classList.add('playerActive');
        currPlayer = '2';
    }

    else {
        document.querySelector('.rsec').classList.remove('playerActive');
        document.querySelector('.lsec').classList.add('playerActive');
        currPlayer = '1';
    }
}

//STARTING A NEW GAME
pressNew.addEventListener('click', startGame);

console.log('yes');

//ROLLING DICE
pressRoll.addEventListener('click', rollDice);

//HOLDING SCORE
pressHold.addEventListener('click', holdGame);