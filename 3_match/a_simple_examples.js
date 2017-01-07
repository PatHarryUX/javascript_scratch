var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var matches_array = str.match(/[A-E]/gi);
console.log(matches_array);

var str1 = 'Hello World';
var matches_array1 = str1.match(/[A-E]/gi);
console.log(matches_array1);

var str2 = 'It was the best of times, it was the worst of times.';
var matches_array2 = str2.match(/[r-z]/g);
console.log(matches_array2);
