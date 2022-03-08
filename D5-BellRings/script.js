const all=document.querySelector(".all");

function move(){
    if(all.classList.contains('change')){
        all.classList.add('back');
        all.classList.remove('change');
    }else{
        all.classList.add('change');
        all.classList.remove('back');
    }
}
all.onclick=move;
