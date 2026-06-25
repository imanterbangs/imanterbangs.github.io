const btn =
document.getElementById(
    "startBtn"
);

const menu =
document.getElementById(
    "menu"
);

const love =
document.getElementById(
    "loveScreen"
);

const letter =
document.querySelector(
    ".letter"
);

const music =
document.getElementById(
    "music"
);

btn.onclick = ()=>{

    menu.style.transition =
    "1s";

    menu.style.opacity = "0";

    setTimeout(()=>{

        menu.style.display =
        "none";

        love.style.display =
        "flex";

        letter.classList.add(
            "showLetter"
        );

        music.volume = 0.3; // 30% volume

        music.play();

    },1000);

};