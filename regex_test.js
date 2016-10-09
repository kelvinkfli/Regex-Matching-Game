//Sample set of strings for user to match/skip
var strings_to_match = ['str1', 'str2', 'str3'];
var strings_to_skip = ['skip1', 'skip2', 'skip3'];

//The regex input that the user will provide
var user_regex_input = new RegExp('skip')

//Function that determines if user has provided valid regex
regexTest = function(match_array, skip_array, input) {
    var match = 0; //this variable tracks the number of match errors
    var skip = 0; //this variable tracks the number of skip errors
    for (var x = 0, y = match_array.length; x < y; x++) {
        if (input.test(match_array[x]) == false) {
            match += 1;
        }
    }
    for (var x = 0, y = skip_array.length; x < y; x++) {
        if (input.test(skip_array[x]) == true) {
            skip += 1;
        }
    }
    if (match > 0 || skip > 0) {
        console.log('number of match errors: ' + match);
        console.log('number of skip errors: ' + skip);
        console.log('Regex does not meet requirements');
    } else {
        console.log('Regex meets all requirements');
    }
}

regexTest(strings_to_match, strings_to_skip, user_regex_input);


--------------------------------------------------Scoring Logic-------------------------------------------------
// <input type=text" id="regex" onkeydown="score_calc" placeholder="Type here..."> <-- form area user will type in

var previous_length = 0; //this variable starts my comparison at 0 characters
var points = 1000; //this variable holds the final score for the user after changes

//this function initiates after every key press
score_calc = function() {
    var regex_input = document.getElementById('regex').split(''); //split user's input into an array of letters
    var current_length = regex_input.length; //this variable will equal the input length
    if (current_length > previous_length) { //if user has typed a character, decrease points by 10
        points -= 10; 
    } else if (current_length < previous_length) { //if user has removed a character, increase points by 5
        points += 5;
    }
    previous_length = current_length; //give previous_length a new value = current_length so tracking can start over
}    
