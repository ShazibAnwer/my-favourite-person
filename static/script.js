/* =========================================================
   MY FAVOURITE PERSON ❤️
   FRESH JAVASCRIPT
   SCREEN TRANSITION SYSTEM — CROSSFADE + SLIDE
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");
const thingsScreen = document.getElementById("things");
const memoriesScreen = document.getElementById("memories");
const finalMessageScreen = document.getElementById("finalMessage");


/* =========================================================
   BUTTONS
   ========================================================= */

const giftButton = document.getElementById("giftButton");
const continueButton = document.getElementById("continueButton");
const openLetterButton = document.getElementById("openLetterButton");
const letterContinueButton =
    document.getElementById("letterContinueButton");

const thingsContinueButton =
    document.getElementById("thingsContinueButton");

const nextThingButton =
    document.getElementById("nextThingButton");


/* =========================================================
   LETTER
   ========================================================= */

const envelope =
    document.getElementById("envelope");

const letterText =
    document.getElementById("letterText");


/* =========================================================
   22 THINGS
   ========================================================= */

const heartCard =
    document.getElementById("heartCard");

const heartNumber =
    document.querySelector(".heart-number");

const thingNumber =
    document.getElementById("thingNumber");

const thingText =
    document.getElementById("thingText");

const thingsComplete =
    document.getElementById("thingsComplete");


/* =========================================================
   CURSOR
   ========================================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


/* =========================================================
   SCREEN TRANSITION SETTINGS
   ========================================================= */

const TRANSITION_DURATION = 750;

let isTransitioning = false;


/* =========================================================
   CURSOR GLOW
   ========================================================= */

document.addEventListener("mousemove", (event) => {

    if (!cursorGlow) {
        return;
    }

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* =========================================================
   ALL SCREENS
   ========================================================= */

const screens = [
    intro,
    birthday,
    letter,
    thingsScreen,
    memoriesScreen,
    finalMessageScreen
].filter(Boolean);


/* =========================================================
   SCREEN TRANSITION
   =========================================================

   IMPORTANT:

   We DO NOT immediately remove the current screen.

   Instead:

   current:
       active → leaving

   next:
       hidden → active + entering

   This allows both screens to exist together
   during the transition.

   CSS will handle the actual animation.
   ========================================================= */

function changeScreen(currentScreen, nextScreen) {

    if (!currentScreen || !nextScreen) {

        console.error(
            "❌ Screen transition failed:",
            {
                currentScreen,
                nextScreen
            }
        );

        return;
    }


    if (currentScreen === nextScreen) {
        return;
    }


    if (isTransitioning) {
        return;
    }


    isTransitioning = true;


    /* ---------------------------------------------------------
       Reset next screen scroll
       --------------------------------------------------------- */

    nextScreen.scrollTop = 0;


    /* ---------------------------------------------------------
       Clean previous transition classes
       --------------------------------------------------------- */

    screens.forEach((screen) => {

        screen.classList.remove(
            "screen-entering",
            "screen-leaving"
        );

    });


    /* ---------------------------------------------------------
       CURRENT SCREEN
       --------------------------------------------------------- */

    currentScreen.classList.add(
        "screen-leaving"
    );


    /* ---------------------------------------------------------
       NEXT SCREEN
       --------------------------------------------------------- */

nextScreen.classList.add("active");
currentScreen.classList.remove("active");


    /* ---------------------------------------------------------
       Force browser to recognize the new state.
       
       This prevents Chrome from combining the
       class changes and skipping the animation.
       --------------------------------------------------------- */

    void nextScreen.offsetWidth;


    /* ---------------------------------------------------------
       Start transition
       --------------------------------------------------------- */

    requestAnimationFrame(() => {

        currentScreen.classList.add(
            "screen-leaving-active"
        );

        nextScreen.classList.add(
            "screen-entering-active"
        );

    });


    /* ---------------------------------------------------------
       Finish transition
       --------------------------------------------------------- */

    setTimeout(() => {

        /* Remove old screen completely */

        currentScreen.classList.remove(
            "active",
            "screen-leaving",
            "screen-leaving-active"
        );


        /* Clean next screen */

        nextScreen.classList.remove(
            "screen-entering",
            "screen-entering-active"
        );


        /* Make sure next screen is at top */

        nextScreen.scrollTop = 0;


        /* Unlock */

        isTransitioning = false;


    }, TRANSITION_DURATION + 100);

}


/* =========================================================
   INTRO → BIRTHDAY
   ========================================================= */

if (giftButton) {

    giftButton.addEventListener("click", () => {

        changeScreen(
            intro,
            birthday
        );

    });

}


/* =========================================================
   BIRTHDAY → LETTER
   ========================================================= */

if (continueButton) {

    continueButton.addEventListener("click", () => {

        changeScreen(
            birthday,
            letter
        );

    });

}


/* =========================================================
   OPEN LETTER
   ========================================================= */

if (openLetterButton) {

    openLetterButton.addEventListener("click", () => {

        /* Prevent repeated clicks */

        openLetterButton.disabled = true;


        /* Open envelope */

        if (envelope) {

            envelope.classList.add("open");

        }


        /* Hide open button */

        openLetterButton.style.opacity = "0";

        openLetterButton.style.transform =
            "translateY(10px)";

        openLetterButton.style.pointerEvents =
            "none";


        /* Reveal letter */

        setTimeout(() => {

            if (letterText) {

                letterText.classList.add(
                    "visible"
                );

            }

        }, 900);


        /* Reveal continue button */

        setTimeout(() => {

            if (letterContinueButton) {

                letterContinueButton.classList.add(
                    "visible"
                );

            }

        }, 3500);

    });

}


/* =========================================================
   22 THINGS
   ========================================================= */

const things = [

    "The way you randomly call me by my name.",

    "Your personality.",

    "The way you listen.",

    "The way you smile.",

    "The way you explain things so cutely.",

    "The way you tease me — especially the little whoosh in my ear.",

    "The way you don't listen when I'm saying something.. or just act like you're listening. 😅",

    "Your little reactions.😁",

    "The way you can make me smile without even trying.",

    "Your random messages , voice notes. 😊",

    "Your voice. ✨",

    "The little things you do without realizing they're cute.",

    "The way you make ordinary conversations feel special.",

    "Your stubborn little side. 😂",

    "The way you care.",

    "The way you can be completely yourself with me.",

    "The way you make me miss you.",

    "The way you make me want to become better.",

    "The memories we've made together.",

    "The way you became such an important part of my life.",

    "Simply... you.",

    "The fact that I got to meet you. ❤️"

];


let currentThing = 0;


/* =========================================================
   UPDATE THING
   ========================================================= */

function updateThing() {

    if (
        currentThing < 0 ||
        currentThing >= things.length
    ) {
        return;
    }


    const number =
        String(currentThing + 1)
        .padStart(2, "0");


    /* FRONT NUMBER */

    if (heartNumber) {

        heartNumber.textContent =
            number;

    }


    /* BACK NUMBER */

    if (thingNumber) {

        thingNumber.textContent =
            `${number} / 22`;

    }


    /* MESSAGE */

    if (thingText) {

        thingText.textContent =
            things[currentThing];

    }

}


/* =========================================================
   RESET 22 THINGS
   ========================================================= */

function resetThings() {

    currentThing = 0;

    updateThing();


    /* Reset card */

    if (heartCard) {

        heartCard.style.display = "block";

        heartCard.style.opacity = "1";

        heartCard.style.transform = "";

        heartCard.style.pointerEvents =
            "auto";

        heartCard.classList.remove(
            "flipped"
        );

    }


    /* Reset next button */

    if (nextThingButton) {

        nextThingButton.style.display =
            "inline-block";

        nextThingButton.style.opacity =
            "1";

        nextThingButton.style.transform =
            "";

        nextThingButton.style.pointerEvents =
            "auto";

    }


    /* Reset completion */

    if (thingsComplete) {

        thingsComplete.style.display =
            "none";

    }

}


/* =========================================================
   LETTER → 22 THINGS
   ========================================================= */

if (letterContinueButton) {

    letterContinueButton.addEventListener(
        "click",
        () => {

            resetThings();

            changeScreen(
                letter,
                thingsScreen
            );

        }
    );

}


/* =========================================================
   HEART CARD — FLIP
   ========================================================= */

if (heartCard) {

    heartCard.addEventListener(
        "click",
        () => {

            if (
                currentThing >= things.length
            ) {
                return;
            }


            heartCard.classList.toggle(
                "flipped"
            );

        }
    );

}


/* =========================================================
   NEXT THING
   ========================================================= */

if (nextThingButton) {

    nextThingButton.addEventListener(
        "click",
        () => {

            /* Turn card back */

            if (heartCard) {

                heartCard.classList.remove(
                    "flipped"
                );

            }


            currentThing++;


            /* -------------------------------------------------
               ALL 22 COMPLETED
               ------------------------------------------------- */

            if (
                currentThing >=
                things.length
            ) {


                /* Fade card */

                if (heartCard) {

                    heartCard.style.opacity =
                        "0";

                    heartCard.style.transform =
                        "scale(.8)";

                    heartCard.style.pointerEvents =
                        "none";


                    setTimeout(() => {

                        heartCard.style.display =
                            "none";

                    }, 500);

                }


                /* Fade next button */

                nextThingButton.style.opacity =
                    "0";

                nextThingButton.style.transform =
                    "translateY(10px)";

                nextThingButton.style.pointerEvents =
                    "none";


                setTimeout(() => {

                    nextThingButton.style.display =
                        "none";

                }, 400);


                /* Show completion */

                setTimeout(() => {

                    if (thingsComplete) {

                        thingsComplete.style.display =
                            "block";

                    }

                }, 550);


                return;

            }


            /* Update next thing */

            updateThing();

        }
    );

}


/* =========================================================
   22 THINGS → MEMORIES
   ========================================================= */

if (thingsContinueButton) {

    thingsContinueButton.addEventListener(
        "click",
        () => {

            resetThings();

            if (!memoriesScreen) {

                console.error(
                    "❌ Memories screen not found."
                );

                return;

            }


            memoriesScreen.scrollTop = 0;


            changeScreen(
                thingsScreen,
                memoriesScreen
            );

        }
    );

}


/* =========================================================
   MEMORY CARDS
   ========================================================= */

const memoryCards =
    document.querySelectorAll(
        ".memory-card"
    );


memoryCards.forEach(
    (card, index) => {

        card.dataset.memory =
            index + 1;

    }
);


/* =========================================================
   MEMORIES → FINAL MESSAGE
   ========================================================= */

const memoriesContinueButton =
    document.getElementById("memoriesContinueButton");


if (memoriesContinueButton && memoriesScreen && finalMessageScreen) {

    memoriesContinueButton.addEventListener("click", () => {

        if (isTransitioning) {
            return;
        }

        changeScreen(
            memoriesScreen,
            finalMessageScreen
        );

    });

}


/* =========================================================
   INITIAL STATE
   ========================================================= */

function initializeWebsite() {

    /* Make absolutely sure only intro
       starts active */

    screens.forEach((screen) => {

        screen.classList.remove(
            "active",
            "screen-entering",
            "screen-entering-active",
            "screen-leaving",
            "screen-leaving-active"
        );

        screen.scrollTop = 0;

    });


    if (intro) {

        intro.classList.add(
            "active"
        );

        intro.scrollTop = 0;

    }


    /* Reset 22 things */

    resetThings();


    /* Reset letter */

    if (envelope) {

        envelope.classList.remove(
            "open"
        );

    }


    if (letterText) {

        letterText.classList.remove(
            "visible"
        );

    }


    if (letterContinueButton) {

        letterContinueButton.classList.remove(
            "visible"
        );

    }


    if (openLetterButton) {

        openLetterButton.disabled =
            false;

        openLetterButton.style.opacity =
            "1";

        openLetterButton.style.transform =
            "";

        openLetterButton.style.pointerEvents =
            "auto";

    }

}


/* =========================================================
   START
   ========================================================= */

initializeWebsite();


/* =========================================================
   DEBUG
   ========================================================= */

console.log(
    "❤️ My Favourite Person website loaded."
);

console.log(
    "Screen elements:",
    {
        intro: !!intro,
        birthday: !!birthday,
        letter: !!letter,
        things: !!thingsScreen,
        memories: !!memoriesScreen,
        finalMessage: !!finalMessageScreen
    }
);

console.log(
    "Buttons:",
    {
        giftButton: !!giftButton,
        continueButton: !!continueButton,
        openLetterButton: !!openLetterButton,
        letterContinueButton: !!letterContinueButton,
        nextThingButton: !!nextThingButton,
        thingsContinueButton: !!thingsContinueButton
    }
);


/* =========================================================
   END
   ========================================================= */