const pets = ['cat', 'dog', 'rat']

for (let i = 0; i < 3; i++){
     pets[i] = pets[i] + 's'
}

console.log(pets)


//comment for alternative solution

const pets = ['cat', 'dog', 'rat']

for (let i = 0; i < pets.length; i++){
     pets[i] = pets[i] + 's'
}

console.log(pets)
