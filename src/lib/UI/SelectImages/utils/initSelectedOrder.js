export default function initSelectedOrder(imgs) {
    if (imgs) {
        const images = imgs.map((item, index) => ({id: index, src: item}));
        return images.reduce((map, obj) => {
            map[obj.id] = 0;
            return map;
        }, {});
    }
}