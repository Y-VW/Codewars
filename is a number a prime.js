// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
            break;
        }
    }
    return true;
}
