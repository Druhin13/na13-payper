//go through all text with .total-reached, .total-cost, .per-person and give them an unique id based on their index using jquery
var totalReached = $(".total-reached");
var totalCost = $(".total-cost");
var perPerson = $(".per-person");
for (var i = 0; i < totalReached.length; i++) {
    totalReached[i].setAttribute("id", "total-reached-" + i);
    console.log(totalReached[i]);
    totalCost[i].setAttribute("id", "total-cost-" + i);
    console.log(totalCost[i]);
    perPerson[i].setAttribute("id", "per-person-" + i);
    console.log(perPerson[i]);
}
//go through all text with .total-reached, .total-cost, and store their text in separate arrays using jquery
var totalReachedText = [];
var totalCostText = [];
for (var i = 0; i < totalReached.length; i++) {
    totalReachedText.push($("#total-reached-" + i).text());
    console.log(totalReachedText[i]);
    totalCostText.push($("#total-cost-" + i).text());
    console.log(totalCostText[i]);
}

//calculate per person cost and store it in an array using jquery
var perPersonCost = [];
for (var i = 0; i < totalReached.length; i++) {
    //store the number of per person cost in a variable
    var perPersonCostNumber = parseInt(totalCostText[i].replace(/,/g, "")) / parseInt(totalReachedText[i].replace(/,/g, ""));
    console.log(perPersonCostNumber);
    //round it off to max 2 decimal places
    perPersonCostNumber = perPersonCostNumber * 100;
    perPersonCostNumber = perPersonCostNumber.toFixed(2);
    console.log(perPersonCostNumber);
    //add $ sign in front of the number if 1 or more than 1, else add ¢ sign at the end of the number
    // if (perPersonCostNumber >= 1) {
    // perPersonCostNumber = "$" + perPersonCostNumber;
    // } else {

    perPersonCostNumber = "~" + perPersonCostNumber + "¢";
    // }
    console.log(perPersonCostNumber);
    //store the number in the array
    perPersonCost.push(perPersonCostNumber);
}

//go through the totalReachedText array and totalCostText array, and edit each of them using comma separation (used by new zealanders) and add $ sign in front of the number in totalCostText array using jquery
for (var i = 0; i < totalReached.length; i++) {
    //add comma separation in totalReachedText array
    totalReachedText[i] = totalReachedText[i].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //add + sign at the end of the number in totalReachedText array
    totalReachedText[i] = totalReachedText[i] + "+";
    totalCostText[i] = totalCostText[i].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //add $ sign in front of the number in totalCostText array
    totalCostText[i] = "$" + totalCostText[i];
}

//go through all text with .total-reached, .total-cost, .per-person and replace their text with the text from the arrays using jquery
for (var i = 0; i < totalReached.length; i++) {
    $("#total-reached-" + i).text(totalReachedText[i]);
    $("#total-cost-" + i).text(totalCostText[i]);
    $("#per-person-" + i).text(perPersonCost[i]);
}