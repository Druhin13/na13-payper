//document loaded
$(document).ready(function () {

    //run this only when the page has .whats-your-story-1
    if ($("#whats-your-story").length) {
        console.log("whats your stpry section is present");

        //start the newspaper animation
        $(".newspaper-anim").click();


        function headlineCharCount() {
            // Get the trimmed value of the input field
            var trimmedValue = $("#newspaper-headline").val().trim();
            // Count the characters in the trimmed value
            var headlineCharCount = trimmedValue.length;
            console.log(headlineCharCount);
            if (headlineCharCount < 5) {
                $("#headline-char-count-text").text(headlineCharCount);
                // Set the background color of .char-count to #b23e3e
                $(".char-count").css("background-color", "#b23e3e");
                //set char-count opacity to 0 by default
                $(".char-count").css("opacity", "0");
                $("#headline-maker").addClass("disabled");
                //stop user from clicking on #headline-maker using pointer-events: none
                $("#headline-maker").css("pointer-events", "none");
            } else if (headlineCharCount >= 5 && headlineCharCount <= 60) {
                $("#headline-char-count-text").text(headlineCharCount);
                // Set the background color of .char-count to #6ab23e
                $(".char-count").css("background-color", "#6ab23e");
                //set char-count opacity to 0
                $(".char-count").css("opacity", "0");
                $("#headline-maker").removeClass("disabled");
                //make #headline-maker clickable
                $("#headline-maker").css("pointer-events", "auto");
            } else {
                // $("#headline-char-count-text").text(headlineCharCount);
                $("#headline-char-count-text").text("60+ characters");
                // Set the background color of .char-count to #b23e3e
                $(".char-count").css("background-color", "#b23e3e");
                //set char-count opacity to 1
                $(".char-count").css("opacity", "1");
                $("#headline-maker").addClass("disabled");
                //stop user from clicking on #headline-maker using pointer-events: none
                $("#headline-maker").css("pointer-events", "none");
            }
        }

        headlineCharCount(); // Call the function on page load

        // Register the event handler to run when the input field changes
        $("#newspaper-headline").on("input", function () {
            headlineCharCount(); // Call the function when the input changes

            //if empty, then set #newspaper-headline-change to your headline will show up here
            if ($("#newspaper-headline").val() == "") {
                $("#newspaper-headline-change").text("Your headline will show up here");
                //add disabled class to #headline-maker-continue
                $("#headline-maker").addClass("disabled");
                //stop user from clicking on #headline-maker-continue using pointer-events: none
                $("#headline-maker").css("pointer-events", "none");
            } else {

                //remove disabled class from #headline-maker-continue
                $("#headline-maker").removeClass("disabled");
                //make #headline-maker-continue clickable
                $("#headline-maker").css("pointer-events", "auto");

                // $("#headline-maker").addClass("disabled");
                //stop user from clicking on #headline-maker using pointer-events: none
                // $("#headline-maker").css("pointer-events", "none");
                //set the text of the a tag #headline-maker to "It's happening..."
                $("#headline-maker").text("It's happening...");
                //set the value of the text field to #wys-headline to the value of #newspaper-headline
                $("#wys-headline").val($("#newspaper-headline").val());

                //click on .newspaper-anim
                // $(".newspaper-anim").click();
                //get the text value from the input field and set that to #newspaper-headline-change
                var headlineValue = $("#newspaper-headline").val();
                $("#newspaper-headline-change").text(headlineValue);
                //make #newspaper-headline to be uneditable
                // $("#newspaper-headline").attr("readonly", true);

                //continuosly check if #headline-maker-continue is display block or not, if yes, then stop checking and hide #headline-maker
                var checkIfContinue = setInterval(function () {
                    if ($("#headline-maker-continue").css("display") == "block") {
                        //hide #headline-maker
                        $("#headline-maker").hide();
                        //clear the interval
                        clearInterval(checkIfContinue);
                    }
                }, 100);


                //dynamic font size calculation
                let maxFontSize;
                //if user is on desktop or tablet
                if ($(window).width() > 767) {
                    maxFontSize = 65;
                }
                //if user is on mobile
                else {
                    maxFontSize = 30;
                }
                //set the font size of the #newspaper-headline-change to 1px by default
                $("#newspaper-headline-change").css("font-size", "1px");
                //increase the font size by 1px until the outer width of the newspaper-headline is 90% of the outer width of the #newspaper-size but dont go over 65px
                while ($("#newspaper-headline-change").outerWidth() < $("#newspaper-size").outerWidth() * 0.9 && parseInt($("#newspaper-headline-change").css("font-size")) < maxFontSize) {
                    $("#newspaper-headline-change").css("font-size", parseInt($("#newspaper-headline-change").css("font-size")) + 1 + "px");
                }



                //create a get started link using the $("#newspaper-headline").val() as the headline query parameter
                let domain = window.location.hostname;
                var getStartedLink = "https://" + domain + "/get-started?headline=" + $("#newspaper-headline").val() + "&" + "skip=1";
                //set it as the link to #headline-maker-continue
                $("#headline-maker-continue").attr("href", getStartedLink);

            }


        });

        //if #headline-maker is clicked
        $("#headline-maker").click(function () {

            $("#headline-maker").addClass("disabled");
            //stop user from clicking on #headline-maker using pointer-events: none
            $("#headline-maker").css("pointer-events", "none");
            //set the text of the a tag #headline-maker to "It's happening..."
            $("#headline-maker").text("It's happening...");
            //set the value of the text field to #wys-headline to the value of #newspaper-headline
            $("#wys-headline").val($("#newspaper-headline").val());

            //click on .newspaper-anim
            $(".newspaper-anim").click();
            //get the text value from the input field and set that to #newspaper-headline-change
            var headlineValue = $("#newspaper-headline").val();
            $("#newspaper-headline-change").text(headlineValue);
            //make #newspaper-headline to be uneditable
            $("#newspaper-headline").attr("readonly", true);

            //continuosly check if #headline-maker-continue is display block or not, if yes, then stop checking and hide #headline-maker
            var checkIfContinue = setInterval(function () {
                if ($("#headline-maker-continue").css("display") == "block") {
                    //hide #headline-maker
                    $("#headline-maker").hide();
                    //clear the interval
                    clearInterval(checkIfContinue);
                }
            }, 100);


            //dynamic font size calculation
            let maxFontSize;
            //if user is on desktop or tablet
            if ($(window).width() > 767) {
                maxFontSize = 65;
            }
            //if user is on mobile
            else {
                maxFontSize = 30;
            }
            //set the font size of the #newspaper-headline-change to 1px by default
            $("#newspaper-headline-change").css("font-size", "1px");
            //increase the font size by 1px until the outer width of the newspaper-headline is 90% of the outer width of the #newspaper-size but dont go over 65px
            while ($("#newspaper-headline-change").outerWidth() < $("#newspaper-size").outerWidth() * 0.9 && parseInt($("#newspaper-headline-change").css("font-size")) < maxFontSize) {
                $("#newspaper-headline-change").css("font-size", parseInt($("#newspaper-headline-change").css("font-size")) + 1 + "px");
            }



            //create a get started link using the $("#newspaper-headline").val() as the headline query parameter
            let domain = window.location.hostname;
            var getStartedLink = "https://" + domain + "/get-started?headline=" + $("#newspaper-headline").val() + "&" + "skip=1";
            //set it as the link to #headline-maker-continue
            $("#headline-maker-continue").attr("href", getStartedLink);

        });




        //if #headline-maker-continue is clicked

        //set wys-form-section hidden by default
        // $(".wys-form-section").hide();
        //set .wys-form-section opacity to 0 by default
        // $(".wys-form-section").css("opacity", "0");

        $('#headline-maker-continue').click(function () {
            //transition .whats-your-story-1 to opacity 0 using anime js. once complete hide it and show #wys-form-section, and animate #wys-form-section to opacity 1
            /*
        anime({
            targets: '.whats-your-story-1',
            opacity: 0,
            duration: 500,
            easing: 'easeInOutQuad',
            complete: function (anim) {
                $(".whats-your-story-1").hide();
                $(".wys-form-section").show();
                anime({
                    targets: '.wys-form-section',
                    opacity: 1,
                    duration: 500,
                    easing: 'easeInOutQuad',
                });
                //get the scroll value of #whats-your-story
                var scrollValue = $("#whats-your-story").offset().top;
                // lenis.scrollTo("#whats-your-story");
                lenis.scrollTo(scrollValue);
            }
        });
    */

        });

    } else {
        console.log("not present");
    }


}); //document loaded