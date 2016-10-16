$(function(){
    //The objects that hold all the question sets
    var questionSetOne = {
        matchStrings: ["string1", "string2", "string3"],
        skipStrings: ["skip1", "skip2", "skip3"]
    };
    var questionSetTwo = {
        matchStrings: ["sentence4", "sentence5", "sentence6"],
        skipStrings: ["skip4", "skip5", "skip6"]
    };
    //Array to get an index of all questions
    var questionArray = [questionSetOne, questionSetTwo];
    //Counter to loop through the array above
    var counter = -1;

    var previous_length = 0; //this variable starts my comparison at 0 characters
    var current_length = 0;
    var points = 1000; //this variable holds the final score for the user after changes

    //when play button is clicked, present the next question set
    $('.playButton').click(function(){
        nextQuestionSet();
    });

    //When submit button is clicked, check if it is correct + print errors (currently only logs)
    $('.submitButton').click(function(){
        var user_regex_input = new RegExp($('.inputArea').val());
        regexTest(questionArray[counter].matchStrings, questionArray[counter].skipStrings, user_regex_input);
    });

    $('.inputArea').keydown(function(){
        scoreCalc();
    })

    function scoreCalc() {
        var regex_input = $('.inputArea').val().split(''); //split user's input into an array of letters
        current_length = regex_input.length+1; //this variable will equal the input length
        console.log(current_length);
        console.log(regex_input);
        console.log(previous_length);
        if (current_length > previous_length) { //if user has typed a character, decrease points by 10
            var increment = current_length - previous_length;
            for (i = 0; i < increment; i++) { //to account for copy and pasting regex
                points -= 10;
            }
        } else if (current_length < previous_length) { //if user has removed a character, increase points by 5
            var decrement = previous_length - current_length;
            for (i = 0; i < decrement; i++) { //to account for highlight deleting
                points += 5;
            }
        }
        console.log(points);
        previous_length = current_length; //give previous_length a new value = current_length so tracking can start over
    }
    function regexTest(match_array, skip_array, input) {
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
    function nextQuestionSet() {
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
})
