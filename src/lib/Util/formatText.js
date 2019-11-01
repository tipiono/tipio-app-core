function formatText(input, formatter, separator) {
    const maxLength = 280;
    let text;
    let rest;
    
    if (input) {
        text = input.substr(0, maxLength);
        text = text.substr(0, Math.min(text.length, text.lastIndexOf(" ")));
        rest = input.substr(text.length);

        /**
         * Format first [maxLength] characters
         */
        text = input.split("\n").map((item, key) => {
            if (item) {
                return formatter(item, key);
            } else {
                return separator;
            }
        });
        /**
         * Format rest of the text
         */
        if (rest) {
            rest = rest.split("\n").map((item, key) => {
                if (item) {
                    // <li key={key}>{i}</li>
                    return formatter(item, key);
                } else {
                    return separator;
                }
            })
        }
    }

    return { textFormatted: text, restFormatted: rest }
}
export default formatText;