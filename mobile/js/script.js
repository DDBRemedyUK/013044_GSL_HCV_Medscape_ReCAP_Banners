$(document).ready(function () {
    animateBanner()

    function animateBanner() {
        idleTime = 0,
            idleInterval = setInterval(timerIncrement, 200),
            slide = 1,
            slideTotal = 5,
            seconds = 0;

        var slides = {
            frame1: 5,
            frame2: 5, //multiples of 0.2
            frame3: 5,
            frame4: 5,
            frame5: 0
        }

        //Increment the idle time counter every 3 seconds.
        function timerIncrement() {
            idleTime++;
            seconds = parseFloat(((idleTime * 0.2) % slides["frame" + slide]).toFixed(1)); //fix floating point number glitch
            console.log(seconds);
            if (seconds == 0) {
                let frame = "#frame" + (slide + 1);
                if (frame === "#frame2") {
                    $("#footer").addClass('hide');
                }
                if (frame === "#frame3") {
                    $("#footer").removeClass('hide');
                    $("#footer").addClass('show');
                }
                if (frame === "#frame4") {
                    $("#slides").removeClass('question');
                }
                if (frame === "#frame5") {
                    $("#logo-epclusa").addClass('hide');
                    $("#job-no").addClass('show');
                }
                $("#frame" + (slide + 1)).prev().addClass("hide");
                $("#frame" + (slide + 1)).addClass("show");
                $("#img" + (slide + 1)).prev().addClass("hide");
                $("#img" + (slide + 1)).addClass("show");

                seconds = idleTime = 0;
                slide != slideTotal - 1 ? slide++ : clearInterval(idleInterval);
            }
        };
    }; //animateBanner()
}); //document ready