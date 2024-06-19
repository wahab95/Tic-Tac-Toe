const cells = [];
const cont = document.querySelector('.container');
const setBoard=()=>{    for(let i =0; i < 3; i++){
        for(let j = 0; j < 3 ;j++){
            const e = document.createElement('div')
            e.style['border']= '1px solid black';
            e.classList.add('item');
            e.setAttribute('id',`r${i}c${j}`)
            cont.appendChild(e);
            cells.push({
                x:i,
                y:j, 
                user:null,
                id:`r${i}c${j}`})
        }
    }
}
const humanPlay = function(){
    cont.addEventListener('click',(e)=>{
        const elementId = e.target['id'];
        const len = cells.length;
        for(let i = 0 ; i < len ; i++){
            if (cells[i]['id'] === elementId & cells[i]['user'] === null){
                    cells[i]['user'] = 'user';
                    document.querySelector(`#${elementId}`).textContent='x';
            }
        }
    
    });
}

 




setBoard();
Play(humanPlay,computerPlay);

// function checkWin(){
//     if ((board.includes('r0c0')& board.includes('r1c1') & board.includes('r2c2')) === 'x'){
//         console.log('win');
//         console.log(board)
//     }
// }

