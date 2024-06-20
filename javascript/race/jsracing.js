let timer = null;
let ballTop = 1;
let ballLeft = 1;

$(function(){

    $("#pause").on("click", function() {
        pause();
    }); 

    $("#moveToBottom").on("click", function() {
        pause();
        timer = setInterval(moveToBottom, 5);
    });
    $("#moveToTop").on("click", function() {
        pause();
        timer = setInterval(moveToTop, 5);
    });
    $("#moveToRight").on("click", function() {
        pause();
        timer = setInterval(moveToRight, 5);
    });
    $("#moveToLeft").on("click", function() {
        pause();
        timer = setInterval(moveToLeft, 5);
    });

});

const pause = function() {
    clearInterval(timer);
};

const moveToTop = function() {
    if (ballTop >= 20) {
        console.log("ballTop:" + ballTop);
        ballTop--;
        $("#ball").css("top", ballTop+"px");
    }
};
const moveToBottom = function() {
    if (ballTop <= 900) {
        console.log("ballTop:" + ballTop);
        ballTop++;
        $("#ball").css("top", ballTop+"px");
    }
};

const moveToLeft = function() {
    if (ballLeft >= 0) {
        console.log("ballLeft:" + ballLeft);
        ballLeft--;
        $("#ball").css("left", ballLeft+"px");
    }
};
const moveToRight = function() {
    if (ballLeft <= 10000) {
        console.log("ballLeft:" + ballLeft);
        ballLeft++;
        $("#ball").css("left", ballLeft+"px");
    }
};




