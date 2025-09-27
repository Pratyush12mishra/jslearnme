const name="hitesh"
const repoCount=50;

// console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('pratty')


console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('p'))

const anotherString=gameName.slice(-3,5)
console.log(anotherString)

const url="https://pratty.com/pratty%69chodu"
console.log(url.replace('%69','-'))