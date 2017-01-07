//fromCharCode takes an integer, and returns a string
console.log(String.fromCharCode(65,66,67));
console.log(String.fromCharCode(90));
console.log(String.fromCharCode(33));

//charCodeAt() is a method used on a 1-character long string, and returns an integer
console.log('A'.charCodeAt(), 'B'.charCodeAt(), 'C'.charCodeAt());
console.log('Z'.charCodeAt());
console.log('!'.charCodeAt());

//fromCharCode and charCodeAt can be used together
console.log(String.fromCharCode( 'A'.charCodeAt(), 'B'.charCodeAt(), 'C'.charCodeAt()));
console.log(String.fromCharCode( 'Z'.charCodeAt() ));
console.log(String.fromCharCode( '!'.charCodeAt() ));
