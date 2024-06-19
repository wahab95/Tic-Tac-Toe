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
        
        npc();
    });
}
function npc(){
    const unplayedcells = cells.filter(cell => !(cell['user'] === 'user' || cell['user'] === 'npc'));

    if(unplayedcells.length === 0){
        return;
    }
    console.log(unplayedcells);
    const r = Math.round(Math.random()*unplayedcells.length);
    const elementId = unplayedcells[r]['id'];
    console.log(elementId);
    document.querySelector(`#${elementId}`).textContent='o';
    const wantedCell = cells.find((c)=>{
        return c['id'] === elementId;
    })
    wantedCell['user']= 'npc';

}
 




setBoard();
humanPlay();