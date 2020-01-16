function calculateDiscountPercentage(price, salePrice) {
    const priceNumber = parseFloat(price);
    const salePriceNumber = parseFloat(salePrice);
    const diff = salePriceNumber - priceNumber;
    return Math.round(diff / priceNumber * 100);
}
export default calculateDiscountPercentage;
