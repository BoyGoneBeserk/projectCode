function digitalClock(){

    var date = new Date();
    var hours = date.getHours() + " ";
    var minutes = date.getMinutes() + " ";
    var seconds = date.getSeconds() + " ";




    if( hours.length < 2 ){
        hours = '0' + hours;
    }

    if( minutes.length < 2 ){
        minutes = '0' + minutes;
    }
    if (seconds.length < 2){
        seconds = '0' + seconds;
    }
       var clock = hours + ':' + minutes + ':' + seconds ;

    document.getElementById('clock').innerHTML = clock;

       console.log(clock);


}

digitalClock();



