let array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
for (let i = 0; i < array.length; i += 1) {
  for (let j = 0; j < array[i].length; j += 1) {
	array[i][j] = (i + j) % 2 === 0 ? 'X' : 'O';
  }
  console.log("\n");
}
console.log(array);