let imgSwap = false;
//set cursor to pointer to .header-img-1 and cursor to auto to .header-img-2
$(".header-img-1").css("cursor", "pointer");
$(".header-img-2").css("cursor", "auto");

//check if user clicks on .header-img-1
$(".header-img-1").click(function () {
    if (imgSwap == false) {
        $("#home-img-swap-anim1").click();
        //make sure .header-img-1 and .header-img-2 are unclickable
        $(".header-img-1").css("pointer-events", "none");
        $(".header-img-2").css("pointer-events", "none");
    }
    if (imgSwap == true) {
        // $("#home-img-swap-anim2").click();
    }
});

$(".header-img-2").click(function () {
    if (imgSwap == false) {
        // $("#home-img-swap-anim1").click();
    }
    if (imgSwap == true) {
        $("#home-img-swap-anim2").click();
        //make sure .header-img-1 and .header-img-2 are unclickable
        $(".header-img-1").css("pointer-events", "none");
        $(".header-img-2").css("pointer-events", "none");
    }
});

$("#home-img-swap-anim1").click(function () {
    setTimeout(function () {
        $(".header-img-1").css("z-index", "5");
        $(".header-img-2").css("z-index", "10");
        imgSwap = true;
        //set cursor to pointer to .header-img-2 and cursor to auto to .header-img-1
        $(".header-img-2").css("cursor", "pointer");
        $(".header-img-1").css("cursor", "auto");
        //make sure .header-img-1 and .header-img-2 are clickable
        $(".header-img-1").css("pointer-events", "auto");
        $(".header-img-2").css("pointer-events", "auto");
    }, 1000);
});

$("#home-img-swap-anim2").click(function () {
    setTimeout(function () {
        $(".header-img-1").css("z-index", "10");
        $(".header-img-2").css("z-index", "5");
        imgSwap = false;
        //set cursor to pointer to .header-img-1 and cursor to auto to .header-img-2
        $(".header-img-1").css("cursor", "pointer");
        $(".header-img-2").css("cursor", "auto");
        //make sure .header-img-1 and .header-img-2 are clickable
        $(".header-img-1").css("pointer-events", "auto");
        $(".header-img-2").css("pointer-events", "auto");
    }, 1000);
});