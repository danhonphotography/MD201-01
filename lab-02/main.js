let name = prompt("What\'s your name");
let origin = prompt('Where are you from?')
let coder = confirm('are you a coder?')

console.log(name)
// console.log(name);
// console.log(origin)

if(name) {
    document.getElementById('name').innerText = name
}

if(origin) {
    document.getElementById('location').innerText = origin
}

// let myArray = ['Davis', 'Ishmael', 'Patrice']

// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

// while() {
//     console.log(myArray)
// }
