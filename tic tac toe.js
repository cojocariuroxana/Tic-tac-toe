let currentSign = 'X';
let winner = ' NOBODY YET';
let mt = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function completeTheCell(i, j, id) {
    console.log(i, j, id);
    if (mt[i][j] === null) {
        mt[i][j] = currentSign;
        document.getElementById(id).innerHTML = currentSign;
        changeTheSign();
    }
    checkForWin();
    draw();
}

function changeTheSign() {
    if (currentSign === 'X') {
        currentSign = '0';
    } else {
        currentSign = 'X';
    }
}

function checkForWin() {
    document.getElementById('winner').innerHTML = "THE WINNER IS:" + "..." + winner + "!";
    for (let i = 0, j = 0; i < 3; ++i) {
        if (mt[i][j] && mt[i][j] === mt[i][j + 1] && mt[i][j + 1] === mt[i][j + 2]) {
            winner = mt[i][j];
            showWinner();
        }
    }
    for (let i = 0, j = 0; j < 3; ++j) {
        if (mt[i][j] && mt[i][j] === mt[i + 1][j] && mt[i + 1][j] === mt[i + 2][j]) {
            winner = mt[i][j];
            showWinner();
        }
    }
    if (mt[0][0] && mt[0][0] === mt[1][1] && mt[1][1] === mt[2][2]) {
        winner = mt[0][0];
        showWinner();
    }

    if (mt[0][2] && mt[0][2] === mt[1][1] && mt[1][1] === mt[2][0]) {
        winner = mt[0][2];
        showWinner();
    }
}

function showWinner() {
    document.getElementById('winner').innerHTML = "THE WINNER IS:" + "..." + winner + "...RESET TO PLAY AGAIN!";
}

function draw() {
    let isDraw = 1;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (mt[i][j] === null)
                isDraw = 0;
        }
    }
    if (winner === ' NOBODY YET' && isDraw === 1)
        document.getElementById('winner').innerHTML = 'DRAW, RESET TO PLAY AGAIN!'
}

function reset() {
    mt = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    winner = 'NOBODY YET';
    document.getElementById('winner').innerHTML = 'THE WINNER IS :' + winner;
    currentSign = 'X';
    let r = document.getElementsByClassName("cellButton");

    function reseteazaElement(element) {
        element.innerHTML = " ";
    };
    Object.values(r).forEach(element => reseteazaElement(element));
}
