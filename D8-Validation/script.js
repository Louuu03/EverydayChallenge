const AOne=['charming','creative','everything','diligent', 'attractive','cool','pretty','generous','energetic','brave','faithful','fearless'];
const ATwo=['beautiful','humorous','passionate','persistent','amazing','unique','gorgeous','incredible','lovely','powerful','glowing', 'brilliant'];
const w2=document.querySelector('.w2');
const w3=document.querySelector('.w3');

function first()
{
    for(let i=0; i<12; i++){
        function changeW2(){
            w2.innerHTML=AOne[i];
            console.log('f'+i);
        }
        function changeW3(){
            if(i===11){
                w3.innerHTML=ATwo[i];
                console.log('fL'+i);
                again();
            }else{
              w3.innerHTML=ATwo[i];
              console.log('f'+i);
            }
            }
        function wait(){
            setTimeout(changeW3,i*4000);
        }
        setTimeout(wait,2000);
        setTimeout(changeW2,i*4000)
    }
}

function again()
{
    for(let i=0; i<12; i++){
        function changeW2(){
            w2.innerHTML=AOne[i];
            console.log('a'+i);
        }
        function changeW3(){
            if(i===11){
                w3.innerHTML=ATwo[i];
                console.log('aL'+i);
                first();
            }else{
              w3.innerHTML=ATwo[i];
              console.log('a'+i);
            }
        }
        function wait(){
            setTimeout(changeW3,i*4000);
        }
        setTimeout(wait,2000);
        setTimeout(changeW2,i*4000)
    }
}

first();