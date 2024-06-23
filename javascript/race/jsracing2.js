// car1 blue
let timer = null;
let carTop = 1;
let carLeft = 1;
let movePixel = 0; //Math.floor(Math.random()*10);
// const interval = 5;

// car2 red
let timer2 = null;
let carTop2 = 1;
let carLeft2 = 1;
let movePixel2 = 0; //Math.floor(Math.random()*10);
// const interval2 = 5;

// car3 yellow
let timer3 = null;
let carTop3 = 1;
let carLeft3 = 1;
let movePixel3 = 0; //Math.floor(Math.random()*10);
// const interval3 = 5;

// car4 green
let timer4 = null;
let carTop4 = 1;
let carLeft4 = 1;
let movePixel4 = 0; //Math.floor(Math.random()*10);
// const interval4 = 5;

// ALL
let frameCount = 0;
let carSpeed = 100;
const WHmin = 13;
const Wmax = 1820;
const Hmax = 950;
let intervals = [];
let rank = 1;
const ranking = [];



$(function(){
    makeTimer("strBtn", move("right"), 10);
    makeTimer2("strBtn", move2("right"), 10);
    makeTimer3("strBtn", move3("right"), 10);
    makeTimer4("strBtn", move4("right"), 10);



    console.log(movePixel);
    console.log(movePixel2);
    console.log(movePixel3);
    console.log(movePixel4);

    $("#strBtn").on("click", function(){
        $("#strBtn").hide();
        $("#goBtn").show();
        imgAnimate();

    }); //strBtn

    $("#goBtn").on("click", function(){
        clearInterval(timer);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);
        
        $("#goBtn").hide();
        $("#strBtn").show();
    }); //goBtn
    
    $("#reBtn").on("click",function(){
        location.reload(true);
        updateRanking();
    });

    const updateRanking = () => {
        let rankingHTML = '<ul>';
        ranking.forEach((carId, index) => {
            rankingHTML += `<li>${index + 1}. ${carId}</li>`;
        });
        rankingHTML += '</ul>';
        $('#ranking').html(rankingHTML);
    };

}); // end

const makeTimer =  function(id, f){
    $("#"+id).on("click", function(){
        timer = setInterval(f, movePixel);
    })
};
const makeTimer2 =  function(id, f){
    $("#"+id).on("click", function(){
        timer2 = setInterval(f, movePixel2);
    });
};
const makeTimer3 =  function(id, f){
    $("#"+id).on("click", function(){
        timer3 = setInterval(f, movePixel3);
    });
};
const makeTimer4 =  function(id, f){
    $("#"+id).on("click", function(){
        timer4 = setInterval(f, movePixel4);
    });
};

const imgAnimate = function(){
    const imgTimer1 = setInterval(function(){
        $("#car1").attr("src", `../img/car1_${frameCount++%6+1}.png`);
    }, carSpeed);

    const imgTimer2 = setInterval(function(){
        $("#car2").attr("src", `../img/car2_${frameCount++%22+1}.png`);
    }, carSpeed);

    const imgTimer3 = setInterval(function(){
        $("#car3").attr("src", `../img/car3_${frameCount++%3+1}.png`);
    }, carSpeed);

    const imgTimer4 = setInterval(function(){
        $("#car4").attr("src", `../img/car4_${frameCount++%3+1}.png`);
    }, carSpeed);
};


const getRanMulNum = function() {
    return Math.ceil(Math.random()*5) + 1;
};



const move = function(direction){
    switch(direction){
        case "right" : {
            return function(){
                if(carLeft <= Wmax){
                   carLeft += Math.random()*getRanMulNum();
                   console.log("car1:"+carLeft);
                    $("#car1").css("left", carLeft+"px");
                    if(carLeft[index] >= Wmax && !ranking.includes(carId)){
                        ranking.push(carId);
                        updateRanking();
                    }
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

const move4 = function(direction){
    switch(direction){
        case "right" : {
            return function(){
                if(carLeft4 <= Wmax){
                    carLeft4 += Math.random()*getRanMulNum();
                    console.log("car4:"+carLeft4);
                    $("#car4").css("left", carLeft4+"px");
                }
            }
        }
    }
};






