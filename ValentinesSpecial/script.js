const all=document.querySelector(".all");


function move(){
    if(all.classList.contains('stop')){
        all.classList.add('change');
        all.classList.remove('stop');
    }else{
        all.classList.add('stop');
        all.classList.remove('change');
    }
}
all.onclick=move;
