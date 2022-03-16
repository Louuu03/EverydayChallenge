const AOne=['charming','creative','breath-taking','diligent', 'attractive','imaginative','hard-working','generous','energetic','brave','faithful','fearless'];
const ATwo=['beautiful','humorous','passionate','persistent','amazing','unique','gorgeous','incredible','lovely','powerful','glowing', 'brilliant'];
const w2=document.querySelector('.w2');
const w3=document.querySelector('.w3');

function first()
{
    for(let i=0; i<12; i++){
        function changeW2(){
            w2.innerHTML=AOne[i];
        }
        function changeW3(){
            if(i===11){
                w3.inner=ATwo[i];
                again();
            }else{
              w3.innerHTML=ATwo[i];
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
        }
        function changeW3(){
            if(i===11){
                w3.inner=ATwo[i];
                first();
            }else{
              w3.inner=ATwo[i];
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