let strPad = (input, fullLen, fillStr, fillType = 'FILL_RIGHT') => {
    if(fullLen < input.length) return input;
    const fillNum = fullLen - input.length;
    let left = '';
    let right = '';
    
    if(fillType == 'FILL_LEFT') {
        left = fillStr.repeat(Math.floor(fillNum / fillStr.length)) + fillStr.substr(0, (fillNum % fillStr.length));
    } else if(fillType == 'FILL_RIGHT') {
        right = fillStr.substr(0, (fillNum % fillStr.length)) + fillStr.repeat(Math.floor(fillNum / fillStr.length));
    } else if(fillType == 'FILL_BOTH') {
        let fillNumLeft = Math.ceil(fillNum / 2);
        let fillNumRight = Math.floor(fillNum / 2);
        left = fillStr.repeat(Math.floor(fillNumLeft / fillStr.length)) + fillStr.substr(0, (fillNumLeft % fillStr.length));
        right = fillStr.substr(0, (fillNumRight % fillStr.length)) + fillStr.repeat(Math.floor(fillNumRight / fillStr.length));
    }

    return left + input + right;
}

// console.log(strPad("nix", 20, "_**_", "FILL_BOTH"));
