export default (bindCount, firstRange, secondRange) => {
    return parseInt(bindCount, 10) >= 0
        && parseInt(bindCount, 10) <= parseInt(firstRange.to, 10)
        ? firstRange.price
        : secondRange.price;
}
