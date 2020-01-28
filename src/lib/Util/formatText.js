function formatText(input, formatter, separator) {
    const maxLength = 160;
    let text;
    let rest;


    if (input) {
        text = input.substr(0, maxLength);

        if (input.length >= maxLength) {
            text = text.substr(0, Math.min(text.length, text.lastIndexOf(" ")));
            rest = input.substr(text.length);
        }


        /**
         * Format first [maxLength] characters
         */
        text = text.split("\n").map((item, key) => {
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