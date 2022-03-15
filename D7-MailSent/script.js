const all=document.querySelector(".all");
const button=document.querySelector(".button");
const circleC=document.querySelector(".circleC");
function move(){
    if(all.classList.contains('change')){
        all.classList.add('back');
        all.classList.remove('change');
    }else{
        all.classList.add('change');
        all.classList.remove('back');
    }
}
button.onclick=move;
circleC.onclick=move;


