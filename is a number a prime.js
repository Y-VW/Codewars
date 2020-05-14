// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 == 0 && num > 2) return false;
    let s = Math.sqrt(num);
    for (let i = 3; i <= s; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
