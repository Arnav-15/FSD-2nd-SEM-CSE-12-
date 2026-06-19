function checkPrime() {
    let num = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    if (isNaN(num) || num < 2) {
        result.textContent = "Please enter a number greater than 1.";
        result.style.color = "red";
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = num + " is a Prime Number";
        result.style.color = "green";
    } else {
        result.textContent = num + " is NOT a Prime Number";
        result.style.color = "red";
    }
}