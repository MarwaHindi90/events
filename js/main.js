$(document).ready(function() {
    $("#sideNav").css("left", "-200px")
    $("#openBtn").click(function() {

        if ($("#sideNav").css("left") == "-200px") {

            $("#sideNav").animate({ left: "0px", width: '200px' }, 100);
            $("#main").animate({ marginLeft: "200px" }, 100);
            $("#main").css("backgroundColor", "rgba(255,255,255,0.75)");
        } else {

            $("#sideNav").animate({ left: '-200px', width: '0px' }, 100);
            $("#main").animate({ marginLeft: "0px" }, 100);
            $("#main").css("backgroundColor", "transparent");
        }
    });



    $("#closeBtn").click(function() {
        $("#sideNav").animate({ left: '-200px', width: '0px' }, 100);
        $("#main").animate({ marginLeft: "0px" }, 100);
        $("#main").css("backgroundColor", "transparent");

    });

    // $("#home").click(function() {
    //     if ($("#main").css("backgroundColor") != "transparent") {
    //         $("#main").css("backgroundColor", "transparent");
    //     }

    // });

    /*** position links section ***/

    $(".sideNav a").click(function() {
        let aHref = $(this).attr("href");
        let positionSection = $(aHref).offset().top;
        $('html , body').animate({ scrollTop: positionSection }, 1000);
    });


    /*******  Toggle Section **** */

    $("#about p:first").css("display", "block");
    $(".about h3").click(function() {
        $(this).next().slideToggle(1000);
        $(".about p").not($(this).next()).slideUp(1000);

    });

    /*******  teaxtarea **** */
    var textlimit = 100;
    $("#message").keyup(function() {
        var teaxtLenght = $(this).val().length;
        var character = textlimit - teaxtLenght;
        if (character <= 0) {
            $("#char").text("your available character finished");
            $("#remain").remove();

        } else {

            $("#char").text(character);
        }
    });

});

/* *******  Function CountDown ******* */

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('feb 24, 2020').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)) + ' ' + 'D',
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)) + ' ' + 'H',
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)) + ' ' + 'M',
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second) + ' ' + 'S';


    }, second)