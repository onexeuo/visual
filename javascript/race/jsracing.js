let timer = null;
let timer2 = null;
let carTop = 1;
let car2Top = 1;
let carLeft = 100;
let car2Left = 1;
let movePixel = 1;
let movePixel2 = 1;
let mvePixelRan = Math.random(movePixel2);
const min = 13;
const Wmax = 1820;
const Hmax = 950;
const interval = 5;
const interval2 = 5;

// let cars = [car, car2, car3];

$(function(){
    makeTimer("strBtn", move("right2"));
    $("#strBtn").on("click", function(){

        $("#strBtn").hide();
        $("#goBtn").show();


        makeTimer2("moveToTop", move2("top"));
        makeTimer2("moveToBottom", move2("bottom"));
        makeTimer2("moveToLeft", move2("left"));
        makeTimer2("moveToRight", move2("right"));

        $("#speed").on("click", function(){
            movePixel2++;
            // $("#speed").val(movePixel);
            // console.log($("#speed").val(ballSpeed));
        });

        $("#pause").on("click", function() {
            ToggleEvent(pause2());
        }); 

        if($("#car").Wmax){
            alert('END !');
        }
    });
});


const makeTimer =  function(id, f){
    $("#"+id).on("click", function(){
        pause();
        timer = setInterval(f, interval);
    })
};
const makeTimer2 =  function(id, f){
    $("#"+id).on("click", function(){
        pause2();
        timer2 = setInterval(f, interval2);
    });
};


const pause = function() {
    clearInterval(timer);
};
const pause2 = function() {
    clearInterval(timer2);
    // clearInterval(timer2);
};

const move = function(direction){
    switch(direction){
        case "right2" : {
            return function(){
                if(carLeft <= Wmax){
                   carLeft += movePixel;
                    $("#car").css("left", carLeft+"px");
                }
            }
        }
    }
}

const move2 = function(direction){
    switch(direction){
        case "top" : {
            return function(){
                if(car2Top >= min){
                    car2Top -= movePixel2;
                    $("#car2").css("top", car2Top+"px");
                }
            }
        }
        case "bottom" : {
            return function(){
                if(car2Top <= Hmax){
                    car2Top += movePixel2;
                    $("#car2").css("top", car2Top+"px");
                }
            }
        }
        case "left" : {
            return function(){
                if(car2Left >= min){
                    car2Left -= movePixel2;
                    $("#car2").css("left", car2Left+"px");
                }
            }
        }
        case "right" : {
            return function(){
                if(car2Left <= Wmax){
                    car2Left += mvePixelRan;
                    $("#car2").css("left", car2Left+"px");
                }
            }
        }
    }
}

const move3 = function(direction){
    switch(direction){
        case "right3" : {
            return function(){
                if(car2Left <= Wmax){
                    car2Left += mvePixelRan;
                    $("#car3").css("left", car2Left+"px");
                }
            }
        }
    }
}



