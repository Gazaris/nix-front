let testString = (s) => {
    if(typeof s !== 'string' && s.length < 2) return false;

    let opened = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') opened.push('(');
        else if(s[i] === '[') opened.push('[');
        else if(s[i] === ')') {
            if(opened[opened.length - 1] === '(') opened.pop();
            else return false;
        }
        else if(s[i] === ']') {
            if(opened[opened.length - 1] === '[') opened.pop();
            else return false;
        }
    }

    return !(opened.length > 0);
}
