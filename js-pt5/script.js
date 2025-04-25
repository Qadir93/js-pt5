var input = prompt("Enter a character:");
var charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
  console.log("It's a number.");
} else if (charCode >= 65 && charCode <= 90) {
  console.log("It's an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  console.log("It's a lowercase letter.");
} else {
  console.log("It's neither a number nor a letter.");
}

var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
  console.log(num1 + " is larger.");
} else if (num2 > num1) {
  console.log(num2 + " is larger.");
} else {
  console.log("Both numbers are equal.");
}


var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


var char = prompt("Enter a single character:").toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(char)) {
  console.log(true);
} else {
  console.log(false);
}


var correctPassword = "mySecret123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}



var greeting; 
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);




var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
  console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
  console.log("Good night");
} else {
  console.log("Invalid time format");
}






var studentNames = [];

var studentNames = new Array();

var fruits = ["Apple", "Banana", "Mango"];

var numbers = [10, 20, 30, 40];

var flags = [true, false, true];

var mixedArray = ["Hello", 42, true, null];

var qualifications = [
  "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"
];

document.write("<h3>Qualifications:</h3>");
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}




var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}




var colors = ["Red", "Green", "Blue", "Yellow"];
document.write("Original colors: " + colors.join(", ") + "<br><br>");


var colorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorStart);
document.write("After adding to beginning: " + colors.join(", ") + "<br><br>");


var colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
document.write("After adding to end: " + colors.join(", ") + "<br><br>");


colors.unshift("Purple", "Orange");
document.write("After adding two to beginning: " + colors.join(", ") + "<br><br>");


colors.shift();
document.write("After deleting first color: " + colors.join(", ") + "<br><br>");


colors.pop();
document.write("After deleting last color: " + colors.join(", ") + "<br><br>");


var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
var colorToAdd = prompt("Enter color name to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("After adding at index: " + colors.join(", ") + "<br><br>");


var indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
var deleteCount = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, deleteCount);
document.write("After deleting color(s): " + colors.join(", "));




var studentScores = [320, 230, 480, 120];

document.write("Scores of Students: " + studentScores.join(", ") + "<br>");
studentScores.sort(function(a, b) {
  return a - b;
});
document.write("Ordered Scores of Students: " + studentScores.join(", "));





var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4); 

document.write("Cities list: " + cities.join(", ") + "<br>");
document.write("Selected cities list: " + selectedCities.join(", "));





var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write(singleString);



var fifoArray = [];


fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");


document.write("Values in FIFO order:<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>"); 
document.write(fifoArray.shift() + "<br>"); 




var lifoArray = [];


lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");


document.write("Values in LIFO order:<br>");
document.write(lifoArray.pop() + "<br>"); 
document.write(lifoArray.pop() + "<br>"); 
document.write(lifoArray.pop() + "<br>"); 



var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");