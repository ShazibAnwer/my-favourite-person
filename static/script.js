/* ========================= */
/* ELEMENTS */
/* ========================= */

const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");

const giftButton = document.getElementById("giftButton");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const birthdayStatus =
    document.getElementById("birthdayStatus");

const continueButton =
    document.getElementById("continueButton");

const cursorGlow =
    document.querySelector(".cursor-glow");


/* ========================= */
/* CURSOR LIGHT */
/* ========================= */

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


/* ========================= */
/* OPEN GIFT */
/* ========================= */

giftButton.addEventListener("click", () => {

    intro.classList.remove("active");

    setTimeout(() => {

        birthday.classList.add("active");

    }, 500);

});


/* ========================= */
/* BIRTHDAY COUNTDOWN */
/* ========================= */

/*
   Birthday:
   22 August 2026
*/

const birthdayDate =
    new Date("August 22, 2026 00:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        birthdayDate - now;


    /* Birthday has arrived */

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        birthdayStatus.textContent =
            "Today is your day. ❤️";

        continueButton.textContent =
            "Enter Your Birthday →";

        return;
    }


    /* Calculate time */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    /* Display */

    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


/* Update immediately */

updateCountdown();


/* Update every second */

setInterval(
    updateCountdown,
    1000
);


/* ========================= */
/* CONTINUE */
/* ========================= */

continueButton.addEventListener("click", () => {

    alert(
        "This is only the beginning... ❤️"
    );

});