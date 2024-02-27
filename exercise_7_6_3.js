let userNumber = +prompt("Введите число");
if (!isNaN(userNumber)) {
  let arr = [];
  for(let i = 0; i <= userNumber; i += 1) {
    arr.push(i);
  }
  console.log(arr);
} else {
  console.log("Вы ввели не число")
}