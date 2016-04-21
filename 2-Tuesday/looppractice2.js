var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

function one(x){
	for(var i = 0; i < animals.length-1; i++){
		console.log(animals[i])
	}
}

one()

console.log(' ')



function two(x){
	for(var i = 0; i < animals.length; i += 2){
		console.log(animals[i])
	}
}

two()

console.log(' ')

function three(x){
	for(var i = animals.length -1; i > -1; i -= 1){
		console.log(animals[i])
	}
}

three()

console.log(' ')

function four(x){
	for(var i = 0; i < animals.length; i++){
		if(animals[i] === "rat" || animals[i] === "ocelot"){
			console.log(animals[i])
		}
		else
		{
			console.log(animals[i])
			console.log(animals[i])
		}
	}
}

four()