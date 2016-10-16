//Sample set of strings for user to match/skip
var strings_to_match = ['str1', 'str2', 'str3'];
var strings_to_skip = ['skip1', 'skip2', 'skip3'];

//The regex input that the user will provide
var user_regex_input = new RegExp('str')

//Function that determines if user has provided valid regex, this happens on SUBMIT
regexTest = function(match_array, skip_array, input) {
    var match = 0; //this variable tracks the number of match errors
    var skip = 0; //this variable tracks the number of skip errors

    for (var x = 0, y = match_array.length; x < y; x++) {
        if (input.test(match_array[x]) == false) { //if any of the strings_to_match are false, increase match error count
            match += 1;
        }
    }

    for (var x = 0, y = skip_array.length; x < y; x++) {
        if (input.test(skip_array[x]) == true) { //if any of the strings_to_skip are true, increase skip error count
            skip += 1;
        }
    }

    if (match > 0 || skip > 0) { //if any errors occurred, regex isn't correct
        console.log('number of match errors: ' + match);
        console.log('number of skip errors: ' + skip);
        console.log('Regex does not meet requirements');
    } else { //no errors means regex is correct
        console.log('Regex meets all requirements');
    }
}

regexTest(strings_to_match, strings_to_skip, user_regex_input); //test out the function

//Scoring logic
// <input type=text" id="regex" onkeydown="score_calc" placeholder="Type here..."> <-- form area user will type in
//use keyup instead of keydown to prevent long-holding shenanigans?? may not need

var previous_length = 0; //this variable starts my comparison at 0 characters
var points = 1000; //this variable holds the final score for the user after changes

//this function initiates after every keydown event
score_calc = function() {
    var regex_input = document.getElementById('regex').split(''); //split user's input into an array of letters
    var current_length = regex_input.length; //this variable will equal the input length

    if (current_length > previous_length) { //if user has typed a character, decrease points by 10
        var increment = current_length - previous_length;
        for (i = 0; i < increment; i++) { //to account for copy and pasting regex
            point -= 10;
        }
    } else if (current_length < previous_length) { //if user has removed a character, increase points by 5
        var decrement = previous_length - current_length;
        for (i = 0; i < decrement; i++) { //to account for highlight deleting
            points += 5;
        }
    }
    previous_length = current_length; //give previous_length a new value = current_length so tracking can start over
}

/*
-add timer to decrease score + deductions for leaving browser
-add a cheatsheet
-decrease score for looking at solution/cheat sheet

-local scoreboard


 */
