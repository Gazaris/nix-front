class circledArray{
    arr;
    
    constructor(a) {
        if(typeof a !== 'array') a = [];
        this.arr = a;
    }

    add(el) {
        this.arr.push(el);
        return this.arr;
    }
    get(num) {
        if(typeof num !== 'number') return undefined;
        if(num >= 0) return this.arr[num];
        else return this.arr[this.arr.length + num];
    }
}

// let ca = new circledArray();
// ca.add('str');
// ca.add(1);
// ca.add(['8', 'str']);

// console.log(ca.get(-1));
