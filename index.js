function isPrime(number) {
    if (number < 2) {
        return false
    }
    else if (number == 2 || number == 3){
        return true
    }
    for (let i=2; i < number; i++) {
        if (number % i === 0)
            return false
    }
    return true
}

for (let i = 1; i < 100; i++) {
    console.log(`Is ${i} a prime number: ${isPrime(i)}`)
}