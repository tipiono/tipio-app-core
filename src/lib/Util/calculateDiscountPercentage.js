function calculateDiscountPercentage(price, salePrice) {
    const priceNumber = parseFloat(price);
    const salePriceNumber = parseFloat(salePrice);
    const diff = salePriceNumber - priceNumber;
    return Math.round((diff / priceNumber) * 100);
}

export const getBestPrice = (priceRange) => {
    return parseInt(priceRange[0]?.price);
};

export const createDiscountLabel = (price, salePrice) => {
    const bestPrice = typeof salePrice === 'object' ? getBestPrice(salePrice) : salePrice;
    let discount = calculateDiscountPercentage(price, bestPrice);
    return discount < -20 ? `${discount}%` : `Spar ${price - bestPrice} kr`;
};

export default calculateDiscountPercentage;
