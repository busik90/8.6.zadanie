var a = 3,
    b = 3,
    value = (a * a) - (2 * a * b) - (b * b);

console.log('Zmienna a to: ' + a + ', zmienna b to: ' + b + '.');
console.log('Wynik działania (a * a) - (2 * a * b) - (b * b) to: ' + value);

if (value > 0) {
  console.log('Wynik jest dodatni.');
} else if (value < 0) {
  console.log('Wynik jest ujemny');
} else {
  console.log('Wynik jest równy 0');
}