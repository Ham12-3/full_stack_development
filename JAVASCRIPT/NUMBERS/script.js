// Converting a Number to a String in JavaScript

const age = 30;

const ageSt = age.toString();

console.log(typeof ageSt);

// Dsiplaying a price

const price = 30;

const displayPrice = "The price is " + price + " dollars";

console.log(displayPrice);

// Using toString() with different bases

const decimalNumber = 10;

const binaryNumber = decimalNumber.toString(2);

// Working withBigInt

const ngiIntNum = BigIng(9007199254740991);

console.log(bigIntNum.toString());

// Formatting Currency

const productPrice = 49.955;

const formattedPrice = productPrice.toFixed(2);

console.log(formattedPrice);

// Scientific Data

const pieApprox = 3.14159;

const pieApproxSci = pieApprox.toFixed(3);

// Calculating Body Mass Index (BMI)

const weightKg = 70;

const heightM = 1.75;

const bmi = weightKg / (heightM * heightM);

console.log(bmi.toFixed(2));

// Scientific data representation

const avogadroNumber = 6.02214076e23;

console.log(avogadroNumber.toExponential());

// Converting user input to integer

const userInput = "42";

const userAge = parseInt(userInput);

console.log(userAge);

// Extracting Price from a text

const priceText = "Price: 100 USD";

const extractedPrice = parseInt(
  priceText.replace("Price:", "").replace("USD", ""),
  10
);

console.log(extractedPrice); // 100

// Converting Binary Data from a sensor

const sensorData = "101010101";

const sensorDataDecimal = parseInt(sensorData, 2);

// parseFloat

// Converting Price for an E-commerce checkout

const checkOutPrice = "$49.99";

const checkOutPriceNum = parseFloat(checkOutPrice.replace("$", ""));

console.log("====================================");
console.log(checkOutPriceNum);
console.log("====================================");

// Extracting Temperrature Data from a Weather API

const apiTempData = "Temperature: 26.5 C";

const tempData = parseFloat(
  apiTempData.replace("Temperature:", "").replace("C", "")
);

console.log(tempData);

// Calculating the Grade Point Average

const inputGPA = "3.8";

const parsedGPA = parseFloat(inputGPA);

if (isNaN(parsedGPA)) {
  console.log("Invalid input");
} else {
  console.log(parsedGPA);
}

// calculating savings after a transaction
const initialSavings = 1000;
const withdrwalAmount = 100;

const newSavings = initialSavings - withdrwalAmount;

const newSavingsFloat = parseFloat(newSavings.toFixed(2));

if (isNaN(newSavingsFloat)) {
  console.log("Invalid input");
} else {
  console.log(newSavingsFloat);
}

// Computing the area of a circle

const radiusInpput = "5";

const radius = parseFloat(radiusInput);

const area = Math.PI * radius * radius;

// parseFloat area

const areaFloat = parseFloat(area.toFixed(2));

if (isNaN(areaFloat)) {
  console.log("Invalid input");
} else {
  console.log(areaFloat);
}
