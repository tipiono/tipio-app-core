import React, { useState, useEffect, useRef } from 'react';
import { useScrollPosition } from '../Hooks/useScrollPosition';

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();
    const transition = 'opacity 900ms ease-out, visibility 300ms ease-out, -webkit-transform 600ms ease-out';
    let observer;

    useEffect(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setVisible(entry.isIntersecting)
            });
        });
        observer.observe(domRef.current);
    }, [observer]);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            let newTransition;
            currPos.y < prevPos.y ? newTransition = transition : newTransition = 'none';
            domRef.current.style['transition'] = newTransition;
        },
        [isVisible],
        false,
        false,
        0
    )

    return (
        <div className={ `fade-in-section ${isVisible ? 'is-visible' : ''}` } ref={ domRef }>
            { props.children }
        </div>
    );
}

export default FadeInSection;
