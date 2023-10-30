let buttons = document.querySelectorAll(".number");



buttons.forEach(function(btn){
 var numberCount = parseInt(btn.innerHTML)
    btn.addEventListener("click",function(){
        let count = parseInt(btn.innerHTML);
        count--;
        if(count <0){
           count=numberCount;
        }
        btn.innerHTML=count;
    })
        
    
})


document.addEventListener("DOMContentLoaded", function () {
    let audioo = document.querySelector(".myaudio");
    let btnaud = document.querySelectorAll(".clickaud");

    let audioo2 = document.querySelector(".myaudio2");
    let btnaud2 = document.querySelectorAll(".clickaud2");

    let audioo3 = document.querySelector(".myaudio3");
    let btnaud3 = document.querySelectorAll(".clickaud3");

    let audioo4 = document.querySelector(".myaudio4");
    let btnaud4 = document.querySelectorAll(".clickaud4");

    let audioo5 = document.querySelector(".myaudio5");
    let btnaud5 = document.querySelectorAll(".clickaud5");

    btnaud.forEach(function (btnaudfu) {
        btnaudfu.addEventListener("click", function () {
            if (audioo.paused) {
                audioo.play();
            } else {
                audioo.pause();
            }
        });
    });

    btnaud2.forEach(function (btnaudfu2) {
        btnaudfu2.addEventListener("click", function () {
            if (audioo2.paused) {
                audioo2.play();
            }
            else {
                audioo2.pause();
            }
            
           
        });
    });

    btnaud3.forEach(function (btnaudfu2) {
        btnaudfu2.addEventListener("click", function () {
            if (audioo3.paused) {
                audioo3.play();
            } else {
                audioo3.pause();
            }
        });
    });
    btnaud4.forEach(function (btnaudfu4) {
        btnaudfu4.addEventListener("click", function () {
            if (audioo4.paused) {
                audioo4.play();
            } else {
                audioo4.pause();
            }
        });
    });

    btnaud5.forEach(function (btnaudfu5) {
        btnaudfu5.addEventListener("click", function () {
            if (audioo5.paused) {
                audioo5.play();
            } else {
                audioo5.pause();
            }
        });
    });
});




