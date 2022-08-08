let findSubStr = (haystack, needle) => {
    // Removing all symbols to get pure words
    let str = "\'\".,;?!-–_+=*\\|/";
    for(let char of haystack) {
        if(str.includes(char)) haystack = haystack.replace(char, '');
    };
    // Getting array of words and checking each one
    const words = haystack.split(" ");
    for(let word of words) {
        if(word.includes(needle)) return word;
    }
    return false;
}

// console.log(findSubStr("Ми знаємо, що монохромний колір – це градації сірого", "хром"));
