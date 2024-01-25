// //set the width of #thumb-value to outer width of .thumb-svg-1 continuously
// var checkWidth = setInterval(function () {
//   $("#thumb-value").css("width", $(".thumb-svg-1").outerWidth());
// }, 1); //check every 10ms

// //set pointer events none to #thumb-value
// $("#thumb-value").css("pointer-events", "none");

// /*
//  *
//  *
//  *
//  */

// //store the total width of the range, by storing the outer width of #range
// var rangeWidth = $("#range").outerWidth();
// console.log("Total range = " + rangeWidth);

// //divide the total range into 8 equal parts, and store them in an array
// var rangeWidthArray = [];
// for (var i = 0; i < 8; i++) {
//   rangeWidthArray.push((rangeWidth / 8) * i);
// }
// //add the range outer width to the array at the end
// rangeWidthArray.push(rangeWidth);
// console.log(rangeWidthArray);

// //get the x value of .thumb-svg-1 and store it in a variable
// var thumbSvg1X = $(".thumb-svg-1").offset().left;
// var thumbSvg2X = $(".thumb-svg-2").offset().left;
// // console.log(thumbSvg1X);
// // console.log(thumbSvg2X);
// //set the offset left to 0
// $(".thumb-svg-1").offset({
//   left: rangeWidth - thumbSvg1X
// });
// $(".thumb-svg-2").offset({
//   left: rangeWidth - thumbSvg2X
// });

// $(document).ready(function () {
//   // Get the left and right boundaries of the range
//   const rangeLeft = $("#range").offset().left;
//   const rangeRight = rangeLeft + $("#range").outerWidth();
//   const thumbWidth = $(".thumb-svg-1").outerWidth();

//   // Initialize the draggable functionality for .thumb-svg-1
//   $(".thumb-svg-1").draggable({
//     axis: "x", // Allow dragging only on the horizontal axis
//     containment: [rangeLeft, 0, rangeRight, 0], // Initially, constrain within the range

//     // Function called during dragging
//     drag: function () {
//       const thumb1X = $(this).position().left;

//       // If thumb-svg-1 is more than 50% inside the slider, mirror it
//       if (thumb1X + thumbWidth / 2 > rangeRight / 2) {
//         $(this).css("left", rangeRight - thumb1X - thumbWidth);
//       }
//     }
//   });
// });

// // x of .thumb-svg-2 should always follow thumb-svg-1, so continuously update it
// var checkX = setInterval(function () {
//   // Get the left position of .thumb-svg-1
//   const thumb1X = $(".thumb-svg-1").position().left;

//   // Set the left position of .thumb-svg-2 to match .thumb-svg-1
//   $(".thumb-svg-2").css("left", thumb1X + "px");

//   // Calculate the center position of .thumb-svg-1
//   const thumb1Center = thumb1X + $(".thumb-svg-1").outerWidth() / 2;

//   // Set the left position of #thumb-value to align with .thumb-svg-1
//   $("#thumb-value").css(
//     "left",
//     thumb1Center - $("#thumb-value").outerWidth() / 2 + "px"
//   );

//   //set the width of the .range-fill till the x of .thumb-svg-1
//   $(".range-fill").css("width", thumb1X + "px");

//   //update the text of #thumb-value based on the x position of .thumb-svg-1, within a range of 10000 to 500000
//   let thumbValueinner = Math.round((thumb1X / rangeWidth) * 490000 + 10000);
//   //check the thumb1x value with the values in the rangeWidthArray, and if it is close to (+-10) with any of those values, update the thumbValueinner to that value
//   for (var i = 0; i < rangeWidthArray.length; i++) {
//     if (
//       thumb1X > rangeWidthArray[i] - 10 &&
//       thumb1X < rangeWidthArray[i] + 10
//     ) {
//       thumbValueinner = Math.round(
//         (rangeWidthArray[i] / rangeWidth) * 490000 + 10000
//       );
//     }
//   }

//   //calculate pricing
//   //multiply the thumbValueinner with 1.5cents
//   let calcPrice = Math.round(thumbValueinner * 0.015);
//   let calcOldPrice = calcPrice * 2;

//   //if calcPrice is 7500 and calcOldPrice is 15000, then add a > to them in front
//   if (calcPrice == 7500 && calcOldPrice == 15000) {
//     //show #calc-price-plus and #calc-old-price-plus using jquery
//     $("#calc-price-plus").show();
//     $("#calc-old-price-plus").show();
//   } else {
//     //hide #calc-price-plus and #calc-old-price-plus using jquery
//     $("#calc-price-plus").hide();
//     $("#calc-old-price-plus").hide();
//   }

//   //add comma separation to calcPrice and calcOldPrice
//   calcPrice = calcPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   calcOldPrice = calcOldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   //calculate perprice to 2 decimal places
//   let perPrice = "~1.5";
//   //add $ sign in front of the pricing
//   calcOldPrice = "$" + calcOldPrice;
//   //set it to #calc-price
//   $("#calc-price").text(calcPrice);
//   $("#calc-old-price").text(calcOldPrice);
//   $("#per-price").text(perPrice);
//   //calculate per price and set it to #per-price

//   //add comma separation based on what new zealanders use
//   thumbValueinner = thumbValueinner
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   // console.log(thumbValueinner);
//   $(".thumb-value-inner").text(thumbValueinner);
// }, 1); // Check every 1ms

// //set the x of .thumb-svg-1 to rangeWidthArray[5]
// $(".thumb-svg-1").offset({
//   left: rangeWidthArray[5]
// });

/*
*
*
*

// coverage calculator v2

*
*
*
*/

//print the value of the range slider with class .fs-rangeslider_input.w-input everytime it changes. make it into a function
function coverageCalcV2() {
    $(".fs-rangeslider_input.w-input").on("input", function () {
        // console.log($(this).val());
        //store the value in a variable
        var coverageValue = $(this).val();

        //if value is 10000 then set the text of #tooltip-value to <10,000, or if it is 500000 then set it to 500,000 +
        if (coverageValue == 10000) {
            $("#tooltip-value").text("< 10,000");
        } else if (coverageValue == 500000) {
            $("#tooltip-value").text("500,000 +");
        } else {
            //
        }



        //if coverage value is less than equal to 250000


        // Get the current value of the slider
        let sliderValue = $(this).val();

        // Define the slider's minimum and maximum values
        let sliderMin = 10000;
        let sliderMax = 500000;

        // Define the new range values for test_pp
        let newTestPPMin = 5;
        let newTestPPMax = 1.33;

        // Calculate the new value for test_pp using linear mapping
        let test_pp = ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * (newTestPPMax - newTestPPMin) + newTestPPMin;
        if (coverageValue <= 250000) {
            test_pp = Math.round(test_pp * 100) / 100; // Round to 2 decimal places if needed

            // Format test_pp to always have 2 decimals
            test_pp = test_pp.toFixed(2);
        } else {
            //calculate test_pp using by dividing calcPrice2 by coverageValue, and round to 2 decimal places
            test_pp = (8000 / coverageValue) * 100;
            //format test_pp to always have 2 decimals
            test_pp = test_pp.toFixed(2);
        }

        // let calcPrice2 = Math.round(coverageValue * 0.015);
        let calcPrice2 = Math.round(coverageValue * (test_pp / 100));
        //add a cap to calcPrice2, so that it doesnt go over 8000
        if (calcPrice2 > 8000) {
            calcPrice2 = 8000;
        }

        //if the coverage value is more than equal to 250000, then set the calcPrice2 to 8000
        if (coverageValue >= 250000) {
            calcPrice2 = 8000;
        }

        let calcOldPrice2 = calcPrice2 * 2;
        //add comma separations to both calcOldPrice2 and calcPrice2
        calcPrice2 = calcPrice2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        calcOldPrice2 = calcOldPrice2
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        calcOldPrice2 = "$" + calcOldPrice2;
        let perPrice2 = "~" + test_pp;

        //set the text of #calc-price2 to calcPrice2
        $("#calc-price2").text(calcPrice2);
        $("#calc-old-price2").text(calcOldPrice2);
        $("#per-price2").text(perPrice2);
    });
}
coverageCalcV2();


if (window.innerWidth < 768) {
    //get the outer width of .calc-bg-1 and set that as the oui width of .calc-note-1 and .calc-note-2
    $("#calc-note-1").outerWidth($("#calc-bg-1").outerWidth());
    $("#calc-note-2").outerWidth($("#calc-bg-1").outerWidth());
    console.log($("#calc-bg-1").outerWidth());
}