import React, { useEffect, useState } from 'react';

const SvgInline = props => {
    const [svg, setSvg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
        console.log("props.url ", props.url)
        fetch(props.url)
            .then(res => res.text())
            .then(setSvg)
            .catch(setIsErrored)
            .then(() => setIsLoaded(true))
    }, [props.url]);

    return (
        <div 
            className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isErrored ? 'svgInline--errored' : ''}`}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

export default SvgInline;
