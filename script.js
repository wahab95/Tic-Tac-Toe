const board = {};
const cont = document.querySelector('.container');
const setBoard=()=>{    for(let i =0; i < 3; i++){
        for(let j = 0; j < 3 ;j++){
            const e = document.createElement('div')
            e.style['border']= '1px solid black';
            e.classList.add('item');
            e.setAttribute('id',`r${i}c${j}`)
            cont.appendChild(e);
            e.addEventListener('click',function(){
            //e.innerText = '!'
            })
        }
    }
}
setBoard();
cont.addEventListener('click',(e)=>{
    const tar = e.target['id'];
    document.querySelector(`#${tar}`).textContent = "C";
    if(!(tar === board[tar])){
        //board.push(tar);
        board.create()  
    }
    console.log(board)
});

function checkWin(){
    if (board.includes('r0c0')& board.includes('r1c1') & board.includes('r2c2')){
        console.log('win');
        console.log(board)
    }
}

