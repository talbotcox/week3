var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


console.log('')
  //md 25 27 32 24 18
function one(){
	for(var i in students){
		console.log(students[i].age)
	}
}
one()
 
console.log('')
  //md Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
  function two(){
	for(var i in students){
		if(students[i].city === "Boulder"){
			console.log(students[i].name + " is from " + students[i].city)
		}
	}
}
two()
  
console.log('')
  //md Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
  function three(){
	for(var i in students){
			console.log(students[i].name + ", " + students[i].city)
		
	}
}
three()

console.log('')
  //md Meghan is older than 25 Trent is older than 25
  function four(){
	for(var i in students){
		if(students[i].age > 25){
			console.log(students[i].name + " is older then 25.")
	
		}	
	}
}
four()