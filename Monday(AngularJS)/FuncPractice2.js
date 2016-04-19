function getName(x){console.log(x.name)}
getName({name: "Talbot", Age: 23})

function totalLetters(x){console.log(x.join('').length)}
totalLetters(['what', 'happened', 'to', 'my', 'function'])

function keyValue (x){var y = {}; y[x[0]] = x[1]; console.log(y)}
keyValue(["City","Denver"])

function negativeIndex(x,a) {y = x.reverse(); a = (a * a)+a-1; 
console.log(y[a])}
negativeIndex(['a', 'b', 'c', 'd', 'e'],-2)

function removeM (x){console.log(x.replace("m",""))}
removeM("Family")           
        
function printObject(x){for(var i in x){ console.log(i+" is "+x[i])}}
printObject({ a: 10, b: 20, c: 30 })

function vowels(x){console.log(x.replace(/[^aeiou]/g, '').split(""))}
vowels("alabama")

function twins(x){if(x[0]===x[1] && x[2]===x[3] && x[4]===x[5]){
console.log("true")}else{console.log(false)}}
twins(['a', 'a', 'b', 'b', 'c', 'c'])

function or(x){for(var i = 0; i < x.length; i++){if(x[i] === true){
return true } } return false }
console.log(or([false, false,true, false]))

function unique(x){y = []; for(var i = 0; i < x.length; i++){ if(y.indexOf(x[i]) === -1){ y.push(x[i]) }}console.log(y)}
unique(['a', 'b', 'a', 'c', 'd', 'd'])