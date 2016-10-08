//Sample set of strings for user to match
var strings_to_match = ['str1', 'str2', 'str3'];
var strings_to_skip = ['skip1', 'skip2', 'skip3'];

//The regex input that the user will provide
var user_regex_input = new RegExp('skip')

//Function that determines
regexTest = function(match_array, skip_array, input) {
    var match = 0;
    var skip = 0;
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