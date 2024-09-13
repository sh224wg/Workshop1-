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

const button = document.querySelector('button')
button.addEventListener('click', () => {
    // Get number from input field
    const input = document.getElementById('input')
    let number = parseInt(input.value)

    // Create new node with isPrime result and append to container
    const paragraph = document.createElement('p')
    paragraph.innerText = isPrime(number)
    const container = document.querySelector('.container')
    container.appendChild(paragraph)
})