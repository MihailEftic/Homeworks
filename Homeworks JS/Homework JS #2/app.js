console.log("Hello world");

let year = prompt("Enter the year you were born");

let chineseZodiacSings = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

let chineseZodiac = chineseZodiacSings[(year - 4) % 12];

console.log(
  "Your chinese zodiac sing for the year" + year + "is:" + chineseZodiac
);
