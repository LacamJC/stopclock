var seconds = 0;
var hours = 0;
var minutes = 0;

var _seconds = document.getElementById('seconds');
var _minutes = document.getElementById('minutes');
var _hours = document.getElementById('hours');
const btn = document.getElementById('btn');
const btnResetar = document.getElementById('resetar');
var _status = false;



    setInterval(function(){
        if(_status===true)
        {
            console.log("Relogio inciado");
            seconds++;
        
            if(seconds == 60)
            {
                minutes++;
                seconds = 0;
            }
            if(minutes == 60)
            {
                hours++;
                minutes=0;
            }
            _seconds.innerHTML = ("0"+seconds).slice(-2);
            _minutes.innerHTML = ("0"+minutes).slice(-2);
            _hours.innerHTML = ("0"+hours).slice(-2);
        
        }
    }, 1000);


btn.addEventListener('click', function(){
    
    console.log("Status alterado")


    _status === true ? _status=false : _status=true;
    console.log(_status)
})

btnResetar.addEventListener('click', function(){
    seconds =0;
    minutes =0;
    hours=0;

    _seconds.innerHTML = ("0"+seconds).slice(-2);
    _minutes.innerHTML = ("0"+minutes).slice(-2);
    _hours.innerHTML = ("0"+hours).slice(-2);

    _status = false;
})