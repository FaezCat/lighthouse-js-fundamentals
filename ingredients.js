const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (let list = 0; list < ingredients.length; list++) {
  console.log(ingredients[list]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let l = 7; l >= 0; l--) {
  console.log(ingredients[l]);
}