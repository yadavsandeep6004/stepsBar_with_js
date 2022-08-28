let prev = document.getElementById("prev");
let next = document.getElementById("next");
let rounds = document.querySelectorAll(".round");
let progeshbar= document.querySelector(".progeshbar");
 
 let cunter =1;


 next.addEventListener('click',()=>{
     cunter++;
    
     if(cunter>rounds.length){
         cunter = rounds.length;
     }
    update();
 })


 prev.addEventListener('click',()=>{
     cunter--;
    
     if(cunter<=1){
         cunter =1;
     }
     update();
 })

function update(){
    rounds.forEach((item,index)=>{
         if(index< cunter){
             item.classList.add('active');
         }else{
            item.classList.remove('active');   
         };
    })

    const active = document.querySelectorAll(".active");
    progeshbar.style.width=(((active.length-1)/(rounds.length-1))*100)+"%";



    
    if(cunter===1){
        prev.disabled=true;
    }else if(cunter === rounds.length){
        next.disabled=true;
    }else{
        prev.disabled=false;
        next.disabled=false;
    }
}


