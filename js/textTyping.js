var textAnimation = document.querySelector("#text-typing-animation");

var texts = ["Are you looking for employee? ", "I am looking for a job in Rzeszów ", "I know HTML, CSS, JS and RWD ", "More about me? ⬇️"];

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