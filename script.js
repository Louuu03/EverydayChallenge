const backG=document.querySelector('.BackG');
const bigG=document.querySelector('.BigGif');
const arrow=document.querySelector('.arrow');
const pics=document.querySelector('.pics');

console.log();

const days=[];

function createDays(){
    for(let i=0; i<30;i++){
        let x=document.getElementsByClassName('pic')[i];
        days.push(x);
    }
    return days;
}
createDays();
console.log(days);

/* get gif > get href*/
let num;
function getGif(e){
    let Tar=e.target;
    for(let i=0; i<30;i++){
        if(Tar===days[i]){
            num=i+1;
        }
    }
    let gif='./gif/'+num+'.gif';
    backG.getElementsByTagName('h2')[0].innerHTML='';
    bigG.src=gif;
    bigG.style.display='block';
    num=num-1;
    arrow.style.animationName='arrow';
    backG.style.animationName='backG';
    gifAni();
}

function getUrl(){ 
    let url=days[num].getAttribute('alt');
    window.location.assign('./'+url+'/index.html');
}

function gifAni(){
    if(backG.classList.contains('change')){
        backG.classList.add('again');
        backG.classList.remove('change');
    }else{
        backG.classList.add('change');
        backG.classList.remove('again');
    }
}




arrow.addEventListener('click',getUrl);
days[0].addEventListener('click',getGif);
days[1].addEventListener('click',getGif);
days[2].addEventListener('click',getGif);
days[3].addEventListener('click',getGif);
days[4].addEventListener('click',getGif);
days[5].addEventListener('click',getGif);
days[6].addEventListener('click',getGif);
days[7].addEventListener('click',getGif);
days[8].addEventListener('click',getGif);
days[9].addEventListener('click',getGif);