$(document).ready(function() {

// ; - very optional in Javascript in some places
    for (var i = 0; i <= 100; i++) {
        if (i % 15 == 0) {
            $('.fizz-buzz').append("<p>FizzBuzz</p>")

        } else if (i % 5 == 0) {
            $('.fizz-buzz').append("<p>Buzz</p>")

        } else if (i % 3 == 0) {
            $('.fizz-buzz').append("<p>Fizz</p>")
        } else {
            $('.fizz-buzz').append("<p>" + i + "</p>")
        }
    };

})