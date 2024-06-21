// car1 blue
let timer = null;
let carTop = 1;
let carLeft = 1;
let movePixel = 0; //Math.floor(Math.random()*10);
const interval = 5;

// car2 red
let timer2 = null;
let carTop2 = 1;
let carLeft2 = 1;
let movePixel2 = 0; //Math.floor(Math.random()*10);
const interval2 = 5;

// car3 yellow
let timer3 = null;
let carTop3 = 1;
let carLeft3 = 1;
let movePixel3 = 0; //Math.floor(Math.random()*10);
const interval3 = 5;

// ALL
const min = 13;
const Wmax = 1820;
const Hmax = 950;
// let movePixelRan = Math.random(1);

$(function(){
    makeTimer("strBtn", move("right"));
    makeTimer2("strBtn", move2("right"));
    makeTimer3("strBtn", move3("right"));
    console.log(movePixel);
    console.log(movePixel2);
    console.log(movePixel3);

    $("#strBtn").on("click", function(){
        $("#strBtn").hide();
        $("#goBtn").show();

    }); //strBtn

    $("#goBtn").on("click", function(){
        location.reload(true);
    }); //goBtn

}); // end

const makeTimer =  function(id, f){
    $("#"+id).on("click", function(){
        // pause();
        timer = setInterval(f, movePixel);
    })
};
const makeTimer2 =  function(id, f){
    $("#"+id).on("click", function(){
        // pause();
        timer2 = setInterval(f, movePixel2);
    });
};
const makeTimer3 =  function(id, f){
    $("#"+id).on("click", function(){
        // pause();
        timer3 = setInterval(f, movePixel3);
    });
};

const pause = function() {
    clearInterval(timer);
};

const getRanMulNum = function() {
    return Math.ceil(Math.random()*10) + 1;
};

const move = function(direction){
    switch(direction){
        case "right" : {
            return function(){
                if(carLeft <= Wmax){
                   carLeft += Math.random()*getRanMulNum();
                   console.log("car1:"+carLeft);
                    $("#car1").css("left", carLeft+"px");
                }
            }
        }
    }
};

const move2 = function(direction){
    switch(direction){
        case "right" : {
            return function(){
                if(carLeft2 <= Wmax){
                    carLeft2 += Math.random()*getRanMulNum();
                    console.log("car2:"+carLeft2);
                    $("#car2").css("left", carLeft2+"px");
                }
            }
        }
    }
};

const move3 = function(direction){
    switch(direction){
        case "right" : {
            return function(){
                if(carLeft3 <= Wmax){
                    carLeft3 += Math.random()*getRanMulNum();
                    console.log("car3:"+carLeft3);
                    $("#car3").css("left", carLeft3+"px");
                }
            }
        }
    }
};






