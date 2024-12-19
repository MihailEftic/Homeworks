console.log("Hello world");

/*
HOMEWORK Part 2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate
 of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog 
to human years as well
*/

function calculateAgeOfDogAndHuman(age, dogToHuman = true) {
  if (dogToHuman) {
    return age * 7;
  } else {
    return age / 7;
  }
}

//Answer after calling the function

console.log(calculateAgeOfDogAndHuman(7));

console.log(calculateAgeOfDogAndHuman(49, false));
