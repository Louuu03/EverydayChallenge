const icon=document.querySelector(".icon");

function move(){
    if(icon.classList.contains('change')){
        icon.classList.add('back');
        icon.classList.remove('change');
    }else{
        icon.classList.add('change');
        icon.classList.remove('back');
    }
}
icon.onclick=move;
