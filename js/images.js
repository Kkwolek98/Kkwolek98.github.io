var blossom = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
var stars = ["star1.jpg", "star2.jpg", "star3.jpg"]
var img = 0;
var bloss_bg = document.getElementById("main_bg");
var stars_bg = document.getElementById("stars_bg");

function Timer () {
    window.setInterval("nextBg(bloss_bg, blossom)", 6000);
    window.setInterval("nextBg(stars_bg, stars)", 4000);
}
function nextBg(bg, bgs) {
    bg.style.backgroundImage = "url('bgs/"+bgs[img]+"')";
    if (img < bgs.length-1) {
        img++;
    } else {
        img = 0;
    }
    
}