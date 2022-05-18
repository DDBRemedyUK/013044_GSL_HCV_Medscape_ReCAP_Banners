$(document).ready(function () {
    animateBanner()

    function animateBanner() {
        idleTime = 0,
            idleInterval = setInterval(timerIncrement, 200),
            slide = 1,
            slideTotal = 6,
            seconds = 0;

        var slides = {
            frame1: 3,
            frame2: 3, //multiples of 0.2
            frame3: 3,
            frame4: 4,
            frame5: 3,
            frame6: 0
        }

        //Increment the idle time counter every 3 seconds.
        function timerIncrement() {
            idleTime++;
            seconds = parseFloat(((idleTime * 0.2) % slides["frame" + slide]).toFixed(1)); //fix floating point number glitch
            if (seconds == 0) {
                let frame = "#frame" + (slide + 1);

                console.log(frame);

                if(frame === "#frame5"){
                    $("#frame5").prevAll().addClass("hide");
                    $("#frame" + (slide + 1)).addClass("show");
                    $("#footer1").addClass("hide");
                    $("#footer2").addClass("show");
                } 
                if(frame === "#frame6"){
                    $("#frame5").addClass("hide");
                    $("#frame6").addClass("show");
                }
                $("#frame" + (slide + 1)).addClass("show");

                seconds = idleTime = 0;
                slide != slideTotal - 1 ? slide++ : clearInterval(idleInterval);
            }
        };
    }; //animateBanner()
}); //document ready