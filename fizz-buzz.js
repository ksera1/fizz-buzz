// //$(document).ready(function() {

//     var max = parseInt(prompt("Enter a number between 1 and 100"));
//     //prompts take strings; convert to number
//     fizzBuzz(max);
// })

// function fizzBuzz(num) {
//     if (num => 1 && num <= 100) {
//         for (var i = 0; i <= num; i++) {
//             if (i % 15 == 0) {
//                 $('.fizz-buzz').append("<p>FizzBuzz</p>")

//             } else if (i % 5 == 0) {
//                 $('.fizz-buzz').append("<p>Buzz</p>")

//             } else if (i % 3 == 0) {
//                 $('.fizz-buzz').append("<p>Fizz</p>")
//             } else {
//                 $('.fizz-buzz').append("<p>" + i + "</p>")
//             }
//         }
//     } else {
//         alert("sorry, I only take numbers up to 100");
//     }
// }
$(document).ready(function() {

  var max = parseInt(prompt("Enter a number between 1 and 100"));
  //prompts take strings; convert to number
  fizzBuzz(max);
})

function fizzBuzz(num) {
  if ( num >= 1 && num <= 100 ) {
  for (var i = 0; i <= num; i++) {
  if (i % 15 == 0) {
  $('.fizz-buzz').append("<p>FizzBuzz</p>")

  } else if (i % 5 == 0) {
  $('.fizz-buzz').append("<p>Buzz</p>")

  } else if (i % 3 == 0) {
  $('.fizz-buzz').append("<p>Fizz</p>")
  } else {
  $('.fizz-buzz').append("<p>" + i + "</p>")
  }
  }
  } else {
  alert("sorry, I only take numbers up to 100");
  }
}