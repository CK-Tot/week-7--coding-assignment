// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
const ages = [3,9,23,64,2,8,28,93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
const subtractFromLast = subtract => subtract[subtract.length - 1] - subtract[0];
console.log(subtractFromLast(ages))

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(20);
console.log(subtractFromLast(ages))


// Use a loop to iterate through the array and calculate the average age.
let sum = 0;

for (let i = 0; i < ages.length; i++){
	sum += ages[i];
}

let averageAge = sum / ages.length;
console.log(averageAge);

/** 2 Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces */
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetter = 0;
for (let i = 0; i < names.length; i++)
{
	totalLetter += names[i].length;
}
let avgLetters = totalLetter / names.length;

console.log(`Average Letter per name: ${Math.round(avgLetters)}`)

let concatNames = names.join(' ')
console.log(`Concatenated Names: ${concatNames}`)

// 3 How do you access the last element of any array?


// You can accesss the last array like this 

const newArrr = [423,45,45,67,89,42,12,33];

console.log(newArrr[newArrr.length - 1]); // like this

// 4 How do you access the first element of any array?

// you can also accesss the first element of any array like this.

console.log(newArrr[0]); // like this


// 5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for(let i = 0; i < names.length; i++)
{
	nameLengths.push(names[i].length) // this is going to push teh names arryy to the new namesLength
}
console.log(`names lengths array: ${nameLengths}`);

//  6  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthSum = 0;

for (let i = 0; i < nameLengths.length; i++)
{
	nameLengthSum += nameLengths[i];
}

console.log(`sum of names length: ${nameLengthSum}`)

// 7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

const concatWords = (word, n) =>
{
	let reaptword = word;
	
	for (let i = 1; i < n; i++)
	{
		reaptword += word;
	}
	return reaptword;
}

console.log(concatWords("ck", 5));

// 8 Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


const fullName = (firstName, lastName) =>
{
	return `${firstName} ${lastName}`;
}

console.log(fullName('Ck', 'Tot'));


// 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


const arryNum = (arrNum) =>
{
	let arrSum = 0;
	for (let i = 0; i < arrNum.length; i++)
	{
		arrSum += arrNum[i];
		if (arrSum > 100)
		{
			return true;
		}
	}
	return arrSum > 100;
}

console.log(arryNum([12,59,35]));

// 10 Write a function that takes an array of numbers and returns the average of all the elements in the array

const calcAvg = (avgNum) =>
{
	let avrSum = 0;
	for (let i = 0; i < avgNum.length; i++)
	{
		avrSum += avgNum[i];
	}
	return avrSum / avgNum.length;
}

console.log(calcAvg([34,56,77,99,12]));


// 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


const hasHigherAverage = (arr1, arr2) => {

  
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < arr1.length; i++) {
	  sum1 += arr1[i];
	}
	for (let i = 0; i < arr2.length; i++) {
	  sum2 += arr2[i];
	}
	return (sum1 / arr1.length) > (sum2 / arr2.length);
  }
  
  console.log(hasHigherAverage([34,56,77,89], [90,43,21,44,88]));


  // 12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50

  const willBuyDrink = (isHotOutside, moneyInPocket) =>
  {
	return isHotOutside && moneyInPocket > 10.50;
  }

  console.log(willBuyDrink(true, 100));

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

  const calcAge = birthYear =>{ // i have two functions here, the first one takes one para. i resently learned that javascript para work like local variables meaning i can use the same exact name on diffferent functions.
	return 2050 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => // the point of this function is to calculate your age and tells you when you will retire.
{
	const age = calcAge(birthYear)
	const retire = 65 - age;
	// return retire
	if (retire > 0 ){
		return `${firstName} retires in ${retire} years`;
	}else{
		return 'Alredy Retired'
	}

	
}

console.log(yearsUntilRetirement(1988, 'CK'))

