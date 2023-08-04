const mario = document.querySelector(`.mario`);
const pipe = document.querySelector(`.pipe`);

const jump = () => {
    mario.classList.add(`jump`)

    setTimeout(() => {
        mario.classList.remove(`jump`)
    }, 500);
}

const loop = setInterval(() => {

    console.log(`loop`)

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace(`px`, ``);


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {

        pipe.style.animation = `none`;
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = `none`;
        mario.style.bottom = `${marioPosition}px`;

        mario.src = `https://playreplay.com.br/wp-content/uploads/2020/02/game-over-mario.png`;
        mario.style.width = `75px`
        mario.style.marginLeft = `50px`

        clearInterval(loop);
    }

}, 10);

document.addEventListener(`keydown`, jump);

var bnt = document.querySelector("#back-to-top");

bnt.addEventListener("click" , function() {
    window.scrollTo(0, 0);
})