import React, { useEffect, useState } from 'react';

const SvgInline = ({ url }) => {
    const [svg, setSvg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
        if (url)
            fetch(url)
                .then((res) => res.text())
                .then(setSvg)
                .catch(setIsErrored)
                .then(() => setIsLoaded(true));
    }, [url]);

    if (!url) return <></>;

    return (
        <>
            {isLoaded ? (
                <div
                    className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${
                        isErrored ? 'svgInline--errored' : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: svg }}
                />
            ) : (
                <p className="category-left-icon-loading" />
            )}
        </>
    );
};

export default SvgInline;
