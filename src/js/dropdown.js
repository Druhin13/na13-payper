// view answer interaction

// Add unique IDs to .dropdown-wrapper elements
$(".dropdown-wrapper").each(function (index) {
    $(this).attr("id", "dropdown-wrapper-" + index);
});

// Add unique IDs to .dropdown-button elements
$(".dropdown-wrapper .dropdown-button").each(function (index) {
    $(this).attr("id", "dropdown-button-" + index);
});

// Store the original heights of .dropdown-wrapper and .dropdown-button elements
var originalWrapperHeights = $(".dropdown-wrapper")
    .map(function () {
        return $(this).outerHeight();
    })
    .get();

var originalButtonHeights = $(".dropdown-wrapper .dropdown-button")
    .map(function () {
        return $(this).outerHeight();
    })
    .get();

// Set the initial state: closed and heights set to button height
$(".dropdown-wrapper").css("height", function (index) {
    return originalButtonHeights[index];
});

// Toggle dropdown functionality
$(".dropdown-button").click(function () {
    var dropdownWrapper = $(this).closest(".dropdown-wrapper");
    var dropdownWrapperId = dropdownWrapper.attr("id");
    var dropdownWrapperIndex = dropdownWrapperId.split("-").pop();

    if (!dropdownWrapper.hasClass("active")) {
        // Set wrapper height to its original height
        dropdownWrapper.css("height", originalWrapperHeights[dropdownWrapperIndex]);
    } else {
        // Set wrapper height to the button's height
        dropdownWrapper.css("height", originalButtonHeights[dropdownWrapperIndex]);
    }

    // Toggle the 'active' class
    dropdownWrapper.toggleClass("active");
});


//view all questions interaction

//get the outer height of #faq-2
let faq2Height = $("#faq-2").outerHeight();

//set the height of #faq-2 to 0 by default
$("#faq-2").css("height", 0);

//if #faq-view-all is clicked, set the #faq-2 to its original height
$("#faq-view-all").click(function () {
    $("#faq-2").css("height", faq2Height);
    //hide #faq-view-all
    $("#faq-view-all").hide();
    //wait for 600ms and then set the height of #faq-2 to auto
    setTimeout(function () {
        $("#faq-2").css("height", "auto");
    }, 600);
});



// Get a reference to the Lottie element with the class "lottie-animation"
let animation = document.querySelector(".lottie-animation");

// Add an event listener for the "ready" event
animation.addEventListener("ready", () => {
    console.log("You've captured the ready event!");
});

//play it when .test1 is clicked from 0% to 50%
$(".test1").click(function () {
    animation.seek("50%");
    animation.setDirection(-1);
    animation.play();
    animation.setLooping(false);
});




//if there a .dropdown-button with attribure data-click = true, then click on it by default
$(".dropdown-button[data-click='true']").click();