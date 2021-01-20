function prime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
        return "Not a Prime Number";
    }
}
    return "Is a Prime Number"
}
 var result = prime(89);
 console.log(result);