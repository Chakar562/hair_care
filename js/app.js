
$(document).ready(function(){
    $(".hair-problem-btn1").click(function(){
        window.location.href="hairloss.html"

    });
    $(".hair-problem-btn2").click(function(){
        window.location.href="hairgray.html"

    });
    $(".hair-problem-btn3").click(function(){
        window.location.href="hairgrowth.html"

    });
    $(".hair-problem-btn4").click(function(){
        window.location.href="hairbladness.html"

    });
    $(".hair-btn").click(function(){
        window.location.href="home-remedy.html"

    });
    $(".bt-gallery").click(function(){
        window.location.href="gallery.html"

    });
    
});

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display ="none";
}