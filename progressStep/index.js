const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentActive = 1;
next.addEventListener('click',()=>{

    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    setChanges();
})  

prev.addEventListener('click',()=>{

    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    setChanges();
})

function setChanges(){
    
    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
        
    })

    const actives = document.querySelectorAll('.active');

    let wid = (actives.length - 1) / (circles.length - 1 ) * 100 + '%';
    progress.style.width = wid
    
    if(currentActive === 1 ){
        prev.disabled = true
    }
    else if(currentActive === circles.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}