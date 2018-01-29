function sieve(num) {
    var arr = [];
    for (var i = 0; i <= num; i++) {
        arr[i] = true;
    }

    var stop = Math.ceil(Math.sqrt(num));

    arr[0] = false; 
    arr[1] = false;

    for (var i = 2; i <= stop; i++) {
        for (var j = 2; j * i <= num; j++) {
            arr[i * j] = false;
        }
    }
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) result.push(i);
    }
    return result;
}

console.log(sieve(10));
