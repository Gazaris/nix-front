let isPowOfTwo = (num, check = 1) => { // Recursion ver.
    if(check > num) return false;
    else if(check == num) return true;

    return isPowOfTwo(num, check << 1);
}

let isPowOfTwoCycle = (num) => { // Cycle ver.
    let check = 1;
    while(check < num) check = check << 1;
    return check == num;
}

// console.log(isPowOfTwo(9));
