let testDate = (date) => {
    const re = /^([1-9]|[0-2][1-9]|3[0-1])-([1-9]|0[1-9]|1[0-2])-\d{4}?/;
    return re.test(date);
}

// console.log(testDate("25-07-2021"));
