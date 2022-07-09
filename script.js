
var container= document.getElementById('container');
function changeGrind(){


}

for (let i=0;i<256;i++){
    var div= document.createElement('div');
    div.classList.add('box');
    div.classList.add("number"+i);
    container.appendChild(div);
    div.addEventListener('mouseover', (e) => {
        var divChange= document.querySelector("."+String(e.target.classList[1]))
        divChange.setAttribute('style', 'background:white;')
        console.log(divChange)



                           
        
      });
  

  
   
}


