function isPrime(number) {
    if (number < 2) {
        return false
    }
    else if (number == 2 || number == 3){
        return true
    }
    for (let i=2; i < number; i++) {
        if ((number/i)%1 !== 0)
            return false
    }
    return true
}

console.log(isPrime(2))