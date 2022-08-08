let formatNames = () => {
    let names = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";
    const re = /(([A-Z,a-z])\w+), (([A-Z,a-z])\w+)/g;
    const matches = names.matchAll(re);
    const arr = [...matches];
    // console.log(arr);
    let res = "";
    for(let match in arr) {
        let temp = arr[match][0];
        res += temp.split(", ").reverse().join(' ');
        if(match != (arr.length - 1)) res += '\n';
    }
    console.log(res);
}

// formatNames();
