function getDate(date, type) {
    const dateStr = new Date(date);
    const day = dateStr.getDate();
    const dayName = dateStr.toLocaleDateString('nb-NB', { weekday: 'long' }).substring(0, 3);
    const month = dateStr.toLocaleDateString('nb-NB', { month: 'long' }).substring(0, 3);
    if (type === 'DateName') {
        return dayName.charAt(0).toUpperCase() + dayName.slice(1);
    }
    if (type === 'DateMonth') {
        return (
            day +
            '. ' +
            (month
                .substring(0, 3)
                .charAt(0)
                .toUpperCase() +
                month.slice(1))
        );
    }
    if (type === 'MonthYear') {
        return month.charAt(0).toUpperCase() + month.slice(1) + ' ' + dateStr.getFullYear();
    }
    if (type === 'Month') {
        return month.charAt(0).toUpperCase() + month.slice(1);
    }
}

export default getDate;
