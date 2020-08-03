window.onload=function(){
    let btnStart = document.querySelector('#button-start');
    let btnStop = document.querySelector('#button-stop');
    let btnReset = document.querySelector('#button-reset');

    let sec = 00;
    let miliSec = 00;
    let addSec = document.querySelector('#sec');
    let addMiliSec = document.querySelector('#mili-sec');

    let interval;

    btnStart.addEventListener('click', function(){
        clearInterval(interval);
        interval = setInterval(startTime, 1)
    })

    btnStop.addEventListener('click', function(){
        clearInterval(interval);
    })

    btnReset.addEventListener('click', function(){
        clearInterval(interval);
        sec = "00";
        miliSec = "00";
        addSec.innerHTML = sec;
        addMiliSec.innerHTML = miliSec;
    })

    function startTime() {
        miliSec++;

        if(miliSec < 9) {
            addMiliSec.innerHTML = "0" + miliSec;
        } 
        
        if(miliSec > 9) {
            addMiliSec.innerHTML = miliSec;
        }

        if( miliSec > 99) {
            sec++;
            addSec.innerHTML = "0" + sec;
            miliSec = 0;
            addMiliSec.innerHTML = "0" + 0;
        }

        if(sec > 9) {
            addSec.innerHTML = sec;
        }

    }

  }