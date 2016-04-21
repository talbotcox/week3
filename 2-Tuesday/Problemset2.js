// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

function firstReverse(x){
	console.log(x.split('').reverse().join(''))
}
firstReverse("Jon Talbot Cox")

// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

function swapCase(x){
	y = x.split('')
	for(var i = 0; i < y.length; i++){
		//console.log(y[i])
		if(y[i] === y[i].toLowerCase()){
			y[i] = y[i].toUpperCase()
		}
		else{
		y[i] = y[i].toLowerCase()
		}
		
	}
	console.log(y.join(''))
}

swapCase("Jon Talbot Cox")

// Bonus: Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.
function letterCount(x){
	y = x.split(' ')
	for(var i = 0; i < y.length; i++){
		z = y[i].split('').sort()
		for(var c = 0; c<z.length; c++){
			if(z[c] === z[c+1]){
				return y[i]
			}
		}
	}
	return -1
}
letterCount("Today, is the greatest day ever!") 







