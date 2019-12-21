import React, { useState, useEffect, useRef } from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();
    let observer;

    useEffect(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting);

                if (entry.isIntersecting) {
                    disconnectObserver();
                }
            });
        });
        observer.observe(domRef.current);
    }, [observer]);

    const disconnectObserver = () => {
        observer.unobserve(domRef.current);
    };

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}>
            {props.children}
        </div>
    );
}

export default FadeInSection;
