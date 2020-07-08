$(document).ready(function () {

    /********************************** */

   

    $.ajax({
        url: "https://www.twitch.tv/caliebre",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "POST", /* or type:"GET" or type:"PUT" */
        dataType: "json",
        data: {
        },
        success: function (result) {
            console.log(result);    
        },
        error: function () {
            console.log("error");
        }
    });
    /********************************** */

    $('#person-paper-main').draggable();


    $( "#person-paper-main-canvas" )
    .mouseenter(function() {
        $('#person-paper-main').draggable('disable' );
    })
    .mouseleave(function() {
        $('#person-paper-main').draggable('enable' );
    });

    ctx = document.getElementById('person-paper-main-canvas').getContext("2d");

    $('#person-paper-main-canvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#person-paper-main-canvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#person-paper-main-canvas').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#person-paper-main-canvas').mouseleave(function (e) {
        mousePressed = false;
    });


    function Draw(x, y, isDown) {
        if (isDown) {
            ctx.beginPath();
            ctx.strokeStyle = "#756F79";
            ctx.lineWidth = 7;
            ctx.lineJoin = "round";
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }
        lastX = x; lastY = y;
    }



});