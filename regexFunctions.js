export default function nextQuestionSet() {
    counter += 1;
    $('.matchArea').empty();
    //append all the match strings to the textarea
    for (i = 0; i < questionArray[counter].matchStrings.length; i++) {
        $(`<li>${questionArray[counter].matchStrings[i]}</li>`).appendTo('.matchArea');
    }
    //append all the skip strings to the textarea
    for (i = 0; i < questionArray[counter].skipStrings.length; i++) {
        $(`<li>${questionArray[counter].skipStrings[i]}</li>`).appendTo('.matchArea');
    }
}

export default function regexTest(match_array, skip_array, input) {
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
    
