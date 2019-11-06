import React, { useEffect, useState } from 'react';

const Spinner = () => (
    <div class="spinner-grow" role="status">
        <span class="sr-only"></span>
    </div>
)
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
        <>
            {isLoaded ? (
                <div
                    className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${isErrored ? 'svgInline--errored' : ''}`}
                    dangerouslySetInnerHTML={{ __html: svg }}
                />
            ) : (<p className="category-left-icon-loading" />)}
        </>
    );
}

export default SvgInline;
