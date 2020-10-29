function calculateDiscountPercentage(price, salePrice) {
    const priceNumber = parseFloat(price);
    const salePriceNumber = parseFloat(salePrice);
    const diff = salePriceNumber - priceNumber;
    return Math.round((diff / priceNumber) * 100);
}

export const getBestPrice = (priceRange) => {
    if (parseInt(priceRange[0].price) < parseInt(priceRange[1].price)) {
        return parseInt(priceRange[0].price);
    } else return parseInt(priceRange[1].price);
};

export const createDiscountLabel = (price, salePrice) => {
    const bestPrice = typeof salePrice === 'object' ? getBestPrice(salePrice) : salePrice;
    let discount = calculateDiscountPercentage(price, bestPrice);
    return discount < -14 ? `${discount}%` : `Spar ${price - bestPrice} kr`;
};

export default calculateDiscountPercentage;
