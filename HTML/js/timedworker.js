let cut = 0;

function timedCount(){
    cut = cut + 1;
    postMessage(cut);
    setTimeout("timedCount()" ,500);
}

timedCount();
