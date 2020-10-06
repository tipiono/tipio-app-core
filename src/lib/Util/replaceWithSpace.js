export default function(value) {
    return value.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
}
