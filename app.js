let cskruns=["_","_","_","_","_","_"];
let miruns=["_","_","_","_","_","_"];

let cskscore=0;
let miscore=0;
let ballcount=0;
function strikeball(){
    ballcount++;
    let run=Math.floor(Math.random()*5)*2;

    if(run==8){
        run='W';
    }
    //csk
    if(ballcount<=6){
        if(run!='W'){
            cskscore+=run;
            document.getElementById("cskscore").textContent=cskscore;    
        }
        cskruns[ballcount-1]=run;
        document.getElementById("cskruns").textContent=cskruns;
    }

    else if(ballcount>6&& ballcount<=12){
        if(run!='W'){
            miscore+=run;
            document.getElementById("miscore").textContent=miscore;    
        }
        miruns[ballcount-7]=run;
        document.getElementById("miruns").textContent=miruns;
    }
    if(ballcount>=12){
        document.getElementById("bat").disabled=true;
        let maxscore=Math.max(miscore,cskscore);
        if(cskscore==maxscore){
            document.getElementById("csk").classList.add('winner');
        }
        else if(maxscore==miscore){
            document.getElementById("mi").classList.add('winner');
        }
    }
}