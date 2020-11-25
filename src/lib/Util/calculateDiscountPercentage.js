import replaceWithSpace from './replaceWithSpace';

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
    const priceToShow = price - bestPrice;
    return priceToShow < 1000 ? `${discount}%` : `-` + replaceWithSpace(priceToShow.toString()) + ` Kr`;
};

export default calculateDiscountPercentage;
