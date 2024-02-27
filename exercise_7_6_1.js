let word = prompt("Введите текст на проверку");
let reverseWord = "";
let cleanString = word.replace(/[,.!] /g, '');
for (let i = cleanString.length - 1; i >= 0; i -=1) {
  reverseWord = reverseWord + cleanString[i];
}
if (cleanString.toLowerCase() === reverseWord.toLowerCase()) {
  console.log(`${word} является палиндромом`)
} else {
  console.log(`${word} не является палиндромом`)
}