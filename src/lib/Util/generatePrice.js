export default (bindCount, range1, range2) => {
    let firstRange = {};
    let secondRange = {};
    if ((range1 && range1.id) < (range2 && range2.id)) {
        firstRange = range1;
        secondRange = range2;
    } else {
        firstRange = range2;
        secondRange = range1;
    }
    return parseInt(bindCount, 10) >= 0 && parseInt(bindCount, 10) <= parseInt(firstRange && firstRange.to, 10)
        ? firstRange && firstRange.price
        : secondRange && secondRange.price;
};
