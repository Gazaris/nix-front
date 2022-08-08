let drawRectangle = (columns, rows) => {
    // ▮▮
    // ▮▮
    if(typeof columns !== 'number' || typeof rows !== 'number') return undefined;
    let str = "";
    for(let r = 0; r < rows; r++) {
        str += '▮'.repeat(columns);
        if(r != (rows - 1)) str += '\n';
    }
    
    // For outputting on a page
    // let output = document.createElement('pre')
    // output.textContent = str;
    // document.body.insertBefore(output, document.body.firstChild);

    // For outputting in console
    console.log(str);
}
// drawRectangle(5, 3);

let drawTriangle = (rows) => {
    //  ▲
    // ▲▼▲
    if(typeof columns !== 'number' || typeof rows !== 'number') return undefined;
    let str = "";
    for(let r = 0; r < rows; r++) {
        str += " ".repeat(rows - (1 + r)) + "▲" + "▼▲".repeat(r)
        if(r != (rows - 1)) str += '\n';
    }
    
    // For outputting on a page
    // let output = document.createElement('pre')
    // output.textContent = str;
    // document.body.insertBefore(output, document.body.firstChild);

    // For outputting in console
    console.log(str);
}
// drawTriangle(10);
