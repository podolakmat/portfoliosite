var textAnimation = document.querySelector("#text-typing-animation");

var texts = ["Szukam pracy w Rzeszowie ", "Znam HTML, CSS, JS i RWD ", "Więcej o mnie niżej ⬇️"];

var x;
var y = 0;
var z = 0;

function textTypingAnimation() {
    if (textAnimation.innerHTML.length === texts[z].length) {
        x = 0;
        setTimeout(del, 1000);
    }
    if (y < texts[z].length) {
        textAnimation.innerHTML += texts[z].charAt(y);
        y++;
        setTimeout(textTypingAnimation, 65);
    } else {
        z++;
        y = 0;
        x = 0;
        setTimeout(textTypingAnimation, 4000);
    }
    if (z === texts.length) {
        z = 0;
    }
}

function del() {
    if (textAnimation.innerHTML.length == 0) {
        clearTimeout(time);
    } else {
        textAnimation.innerHTML = textAnimation.innerHTML.slice(0, textAnimation.innerHTML.length - x);
        x++;
        var time = setTimeout(del, 150);
    }
}
textTypingAnimation();