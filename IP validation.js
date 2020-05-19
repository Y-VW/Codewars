//Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//Input to the function is guaranteed to be a single string.
//Valid inputs: 1.2.3.4 or 123.45.67.89
//Invalid inputs: 1.2.3 or 1.2.3.4.5 or 01.02.03.04

function isValidIP(str) {
    let re = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
    if (re.test(str)) return true
    else return false;
}

//25[0-5] checks for numbers between 250 - 255
//2[0-4][0-9] checks for numbers between 200 - 249
//1[0-9][0-9] checks for numbers between 100 - 199
//[1-9][0-9] checks for numbers between 11 - 99 (so that 01 is not allowed)
//[0-9] checks for numbers between 0 - 9
