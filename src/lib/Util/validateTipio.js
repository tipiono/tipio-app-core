export default function isValidTipio(expireDate) {
    const today = new Date();
    const someDate = new Date(expireDate);
    return someDate.getTime() < today.getTime();
}
