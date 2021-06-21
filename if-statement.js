// first attempt
const fruit = 'orange'
if (fruit => 1) {
  console.log('The fruit name has more than five characters.')
}
else {
  console.log('The fruit name has five characters or less.')
}


// solution

const fruit = 'orange'
if (fruit.length > 5) {
  console.log('The fruit name has more than five characters.')
} else {
  console.log('The fruit has five character or less.')
}