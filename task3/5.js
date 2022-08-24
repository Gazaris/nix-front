let substrCount = (input, offset, needle, length) => {
    if(
        typeof needle !== "string" ||
        needle.length == 0
        ) return 0;
    let haystack = input.slice(offset, length + offset);
    let counter = 0;
    for(let c = 0; c < haystack.length; c++) {
        if(haystack[c] == needle[0]) {
            if(needle.length === 1) {
                counter++;
                continue;
            }
            let hay2 = haystack.slice(c, length);
            for(let c2 = 1; c2 < hay2.length; c2++) {
                if(hay2[c2] != needle[c2]) break;
                // If reached the end of the needle with all characters matching
                if((c2 + 1) == needle.length) {
                    counter++;
                    break;
                }
            }
        }
    }
    return counter;
}

// console.log("Found " + substrCount("Good Golly Miss Molly", 7, "ll", 10) + " substring(s).");