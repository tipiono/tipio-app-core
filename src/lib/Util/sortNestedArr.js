export default function(nestedObj, prop, arr) {
    return (
        arr &&
        arr.length &&
        arr.sort(function(a, b) {
            if (a[nestedObj] && b[nestedObj]) {
                if (a[nestedObj][prop] < b[nestedObj][prop]) {
                    return -1;
                } else if (a[nestedObj][prop] > b[nestedObj][prop]) {
                    return 1;
                } else {
                    return 0;
                }
            }
            return 0;
        })
    );
}
