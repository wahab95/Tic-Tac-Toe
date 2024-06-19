const cells = [];
const cont = document.querySelector('.container');

function setBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const e = document.createElement('div');
            e.style.border = '1px solid black';
            e.classList.add('item');
            e.setAttribute('id', `r${i}c${j}`);
            cont.appendChild(e);
            cells.push({
                x: i,
                y: j,
                user: null,
                id: `r${i}c${j}`
            });
        }
    }
}

function humanPlay() {
    cont.addEventListener('click', (e) => {
        if (e.target.classList.contains('item') && e.target.textContent === '') {
            const elementId = e.target.id;
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].id === elementId && cells[i].user === null) {
                    cells[i].user = 'user';
                    e.target.textContent = 'x';
                    computerPlay();  // Call computerPlay after human plays
                    break; // Stop searching after finding a match
                }
            }
        }
    });
}

function computerPlay() {
    const availableCells = cells.filter(cell => cell.user === null);
    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const chosenCell = availableCells[randomIndex];
        chosenCell.user = 'computer';
        document.querySelector(`#${chosenCell.id}`).textContent = 'o';
    } else {
        // Handle the case where no available cells are left (game is a draw)
        console.log("It's a draw!");
    }
}

function Play(human) {
    human(); // Start with the human player
}

setBoard();
Play(humanPlay);
