console.log('First for loop');
var countUp = 0;
for (let i = 0; i < 10; i++) {
  countUp = 0 + i;
  console.log(countUp);
}
console.log('Second for loop');
var countBy2 = 0;
for (let i = 0; i < 10; i++) {
  countBy2 = 2 * i;
  console.log(countBy2);
}
console.log('Third for loop');
var countDown = 0;
for (let i = 100; i > 0; i -= 1) {
  countDown = i;
  console.log('Time till explosion' + ' ' + countDown + '!');
}
