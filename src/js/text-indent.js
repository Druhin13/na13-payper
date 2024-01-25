//make sure user is on desktop or tablet
if (window.innerWidth > 768) {

    // Define a function to set the text-indent based on window size
    function setTextIndent() {
        $("[indent]").each(function () {
            var indentId = $(this).attr("indent");

            if ($("#" + indentId).length > 0) {
                var indentWidth = $("#" + indentId).outerWidth();
                console.log("indentWidth of " + indentId + " is " + indentWidth);
                $(this).css("text-indent", indentWidth + "px");
            } else {
                console.log("Element with id " + indentId + " does not exist.");
            }
        });
    }

    // Call the function when the page loads
    $(document).ready(function () {
        setTextIndent();
    });

    // Call the function again when the window is resized
    $(window).resize(function () {
        setTextIndent();
    });
}