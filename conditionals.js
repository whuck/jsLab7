$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

    var clicks = 0;

	function countClick(event) {
	    event.preventDefault();
	    // Increment a variable that tracks the
		// number of button clicks
        clicks++;

		// Print the current number of clicks to the
        // <p> with ID "clickCountOutput"
        $("p#clickCountOutput").text(clicks);

		// When the count gets to 10, reset it to 0
        if(clicks == 10) clicks=0;


	}


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var byear = parseInt($("#birthYear").val());
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if ((2020 - byear) < 18) {
            $("#birthYearOutput").text("Child");
        }
        // If they are 18 or over, print "Adult" instead
        else {
            $("#birthYearOutput").text("Adult");
        }


    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmt = $("#purchaseAmount").val();
        // Get the state from the text box with ID "state"
        var state = $("#state").val().toUpperCase();
        var tax = 0.00;
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        switch(state) {
            case "WI" : tax = (purchaseAmt * 1.05).toFixed(2); break;
            case "IL" : tax = (purchaseAmt * 1.08).toFixed(2); break;
            case "MN" : tax = (purchaseAmt * 1.075).toFixed(2); break;
            case "MI" : tax = (purchaseAmt * 1.055).toFixed(2); break;
            default : tax = -1; break;
        }
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        $("#salesTaxOutput").text(`$${tax}`);
        // If the user enters a state not listed above,
        // print "Error" instead
        if(tax == -1) $("#salesTaxOutput").text("Error");

    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        var age = parseInt($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        var food = "";
        if (age < 2) food = "kitten chow";
        else if (age <= 10) food = "adult chow";
        else food = "senior chow";
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
        $("#catAgeOutput").text(food);

    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;
        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue < 2) description = "Ace";
        else if (faceValue <=10) description = faceValue.toString();
        else if (faceValue ==11) description = "Jack";
        else if (faceValue ==12) description = "Queen";
        else if (faceValue ==13) description = "King";
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        switch(suit) {
            case 1: description += " of Clubs"; break;
            case 2: description += " of Spades"; break;
            case 3: description += " of Hearts"; break;
            case 4: description += " of Diamonds"; break;
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);

    }

});