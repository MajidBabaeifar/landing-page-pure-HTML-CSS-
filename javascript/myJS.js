let HeroBtn = document.getElementById('hero-btn');
HeroBtn.setAttribute('href', '');

function showbtn() {
    HeroBtn.style.right = "0";
    HeroBtn.setAttribute('href', 'contactUs.html');
}

function hidebtn() {
    HeroBtn.style.right = "-65px";
    HeroBtn.setAttribute('href', '');
}





// let x = 0;
// let HeroBtn = document.querySelectorAll('hero-btn');

// HeroBtn.addEventListener('mouseover', function() {
// function toggleHeroBtn() {
// if (x == 0) {
// this.style.backgroundcolor = "red";
//     x = 1;
// } else {
// HeroBtn.style.right = -65 + "px";
//     x = 0;
// }
// }
//     HeroBtn.style.right = 0;
// })