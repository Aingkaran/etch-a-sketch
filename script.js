
const container= document.getElementById('container');
let gridSize= 16;
let boxLength= 800/gridSize-5;
let area= gridSize*gridSize;

function changeGrid(boxLength,area){
  for (let i=0;i<area;i++){
    let div= document.createElement('div');
    div.classList.add('box');
    div.style.width= boxLength+'px'
    div.style.height=boxLength+'px'
    div.classList.add("number"+i);
    container.appendChild(div);

    
    div.addEventListener('mouseover', (e) => {
      let divChange= document.querySelector("."+String(e.target.classList[1]))
      divChange.setAttribute('style', 'background:white;')
      divChange.style.width= boxLength+'px'
      divChange.style.height=boxLength+'px'
                        
    });
   
}

}

function clear(){
  const divClear = document.querySelectorAll('.box');
  divClear.forEach((box) => {
    box.remove();

  
  })

}

changeGrid(boxLength,area)
let button= document.getElementById('btn');

button.addEventListener('click', (e) => {
  gridSize= prompt("What would you like the gridSize to be, choose between 1 to 100")
  if (gridSize<100){
    clear()
    boxLength= 800/gridSize-5;
    area= gridSize*gridSize;
    changeGrid(boxLength,area);
  }
  else {
    let gridSize=prompt("Try that again, what grid size would you like between 1 to 100")
    if (gridSize<100){
      clear()
      boxLength= 800/gridSize-5;
      area= gridSize*gridSize;
      changeGrid(boxLength,area);
    }
  }
  
  
                    
});