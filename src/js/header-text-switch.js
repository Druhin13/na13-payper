//Get the div element by its class name
const divElement = document.querySelector(".home-header-word-list");

//Initialize an empty array to store the extracted texts
const switchTexts = [];

//Check if the div element exists
if (divElement) {
    //Split the text content by <br> tags
    const lines = divElement.innerHTML.split("<br>");

    //Loop through the lines and push non-empty lines into the switchTexts array
    lines.forEach((line) => {
        const trimmedLine = line.trim(); //Remove leading/trailing whitespace
        if (trimmedLine !== "") {
            switchTexts.push(trimmedLine);
        }
    });
}

//Output the array of extracted texts
console.log(switchTexts);

//hide .home-header-word-list
$(".home-header-word-list").hide();

//set #text-to-switch to opacity 0 by default
document.querySelector("#text-to-switch").style.opacity = "0";


//using anime.js animate fade in and out among those texts from the switchTexts array in #text-to-switch
// Initialize index to keep track of the currently displayed text
let currentIndex = 0;

// Function to animate the text
function swapText() {
    // Get the current text element
    const currentTextElement = document.querySelector("#text-to-switch");

    // Fade out the current text
    anime({
        targets: currentTextElement,
        opacity: 0,
        duration: 1000, // Adjust the duration as needed
        easing: 'easeInOutSine', // Use a built-in easing function
        complete: function () {
            // Update the text content to the next text in the array
            currentTextElement.textContent = switchTexts[currentIndex];

            // Increment the index or reset to 0 if at the end of the array
            currentIndex = (currentIndex + 1) % switchTexts.length;

            // Fade in the new text
            anime({
                targets: currentTextElement,
                opacity: 1,
                duration: 1000, // Adjust the duration as needed
                easing: 'easeInOutSine', // Use the same easing function
                complete: function () {
                    // Call the function again for the next animation cycle
                    setTimeout(swapText, 5500); // Adjust the delay between animations as needed (2 seconds in this example)
                }
            });
        }
    });
}






/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */



// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
    var wordWrap = tricksWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(
        /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
        '$1<span class="tricksword">$2</span>'
    );
}

var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
    var letterWrap = tricksLetter.item(i);
    letterWrap.innerHTML = letterWrap.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );
}




/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */



var fadeUpReady = anime.timeline({
    loop: false,
    autoplay: true
});

fadeUpReady
    .add({
        targets: [".fade-up .letter", ".fade-up1 .letter", ".fade-up2 .letter", ".fade-up3 . letter", ".fade-up4 . letter", "fade-up5 . letter"],
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1,
        delay: (el, i) => 1 + 1 * i
    });


$(".fade-ready-anim-click").click(function () {
    fadeUpReady.restart();
});





// Fade Up Animation for "New Zealand's"
var fadeUp = anime.timeline({
    loop: false,
    autoplay: false
});

fadeUp
    .add({
        targets: ".fade-up .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    });



// Fade Up Animation for "text swap's first word"
var fadeUp1 = anime.timeline({
    loop: false,
    autoplay: false
});

fadeUp1
    .add({
        targets: ".fade-up1 .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    });



// Fade Up Animation for "PR firm"
var fadeUp2 = anime.timeline({
    loop: false,
    autoplay: false
});

fadeUp2
    .add({
        targets: ".fade-up2 .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    });


//set #d-sub-header opacity to 0 by default
document.querySelector("#d-sub-header").style.opacity = "0";



$(".fade-up-anim-click").click(function () {
    //animate "New Zealand's"
    fadeUp.restart();
    //wait for 500ms
    setTimeout(function () {
        //animate "first word of text swap"
        fadeUp1.restart();
        //animate first lottie stroke
        $(".stroke-anim1").click();
        //click on .img-card-open-anim
        setTimeout(function () {
            $(".img-card-open-anim").click();
            //click on .header-pattern-start-anim
            setTimeout(function () {
                $(".header-pattern-start-anim").click();
                //wait for 1.6s and then hide .header-lottie.t2.test-anim1 and show .header-lottie.t2.test-anim2
                setTimeout(function () {
                    $(".header-lottie.t2.test-anim1").hide();
                    $(".header-lottie.t2.test-anim2").show();
                }, 2300);
            }, 500);
            //wait for 2000ms and then fade in #d-sub-header 
            setTimeout(function () {
                anime({
                    targets: "#d-sub-header",
                    opacity: 1,
                    duration: 1000, // Adjust the duration as needed
                    easing: 'easeInOutSine', // Use a built-in easing function
                });
            }, 2150);

        }, 500);
        //animte "PR firm"
        setTimeout(function () {
            fadeUp2.restart();
            //animate second lottie stroke
            setTimeout(function () {
                $(".stroke-anim2").click();
            }, 500);
        }, 1100);
        setTimeout(function () {
            //hide "first word of text swap" by animating it to opacity 0 easeInOutSine in 1 sec and then hide
            anime({
                targets: "#text-to-switch-hide",
                opacity: 0,
                duration: 1000, // Adjust the duration as needed
                easing: 'easeInOutSine', // Use a built-in easing function
                complete: function () {
                    $("#text-to-switch-hide").hide();
                }
            });
            //start the swap animation
            swapText();
        }, 6500);
    }, 1000);
});