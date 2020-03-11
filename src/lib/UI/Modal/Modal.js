import React, { Component } from 'react';
import PropTypes from 'prop-types';

import onClickOutside from 'react-onclickoutside';

class OnClickOutsideWrapper extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
let ModalOnClickOutsideWrapper = onClickOutside(OnClickOutsideWrapper);

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    }

    componentDidMount() {
        this.addNoScroll();
        window.addEventListener('keyup', this.handleKeyUp, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        this.removeNoScrollClass();
    }

    handleKeyUp(e) {
        const keys = {
            27: () => {
                e.preventDefault();
                this.onCloseButtonClick();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            }
        };

        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    onCloseButtonClick(e) {
        // this.toggleNoScroll();
        e.preventDefault();
        this.removeNoScrollClass();
        this.props.onCloseButtonClick();
    }

    addNoScroll() {
        document.querySelector('html').classList.add('noscroll');
        document.querySelector('body').classList.add('noscroll');
    }

    removeNoScrollClass() {
        document.querySelector('html').classList.remove('noscroll');
        document.querySelector('body').classList.remove('noscroll');
    }

    render() {
        const { children, showCloseButton = false, type = ModalType.LARGE } = this.props;

        let { appendCenteredClass } = this.props;
        if (appendCenteredClass === undefined) {
            appendCenteredClass = true;
        }

        // const [active, setActive] = useState(false);
        const style = { display: 'block' };

        const clsList = `custom__modal--dialog modal-dialog modal-dialog-scrollable ${
            appendCenteredClass ? 'modal-dialog-centered' : ''
        } ${type}`;
        return (
            <>
                <div className="custom__modal modal fade show" tabIndex="-1" role="dialog" style={style}>
                    <div className={clsList} role="document">
                        <div className="custom__modal--content modal-content border-0">
                            <div className="modal-body p-0">
                                <ModalOnClickOutsideWrapper handleClickOutside={this.onCloseButtonClick}>
                                    {children}
                                </ModalOnClickOutsideWrapper>
                            </div>
                            {showCloseButton && (
                                <a href="#" className="custom__modal--close" onClick={this.onCloseButtonClick}>
                                    <svg width="19px" height="19px" viewBox="0 0 19 19">
                                        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <path
                                                d="M11.14,9.16761031 L18.3,1.96761031 C18.5911715,1.67643885 18.7048869,1.25204721 18.5983107,0.854299601 C18.4917346,0.456551996 18.1810583,0.145875751 17.7833107,0.0392996011 C17.3855631,-0.0672765486 16.9611715,0.0464388494 16.67,0.337610305 L9.51,7.50761031 L2.35,0.337610305 C1.89988793,-0.112501766 1.17011207,-0.112501766 0.72,0.337610305 C0.269887929,0.787722376 0.269887929,1.51749823 0.72,1.96761031 L7.88,9.16761031 L0.72,16.2876103 C0.503213186,16.503424 0.381341482,16.7967148 0.381341482,17.1026103 C0.381341482,17.4085058 0.503213186,17.7017966 0.72,17.9176103 C0.935813662,18.1343971 1.2291045,18.2562688 1.535,18.2562688 C1.8408955,18.2562688 2.13418634,18.1343971 2.35,17.9176103 L9.51,10.7576103 L16.67,17.9176103 C16.8886599,18.1333546 17.1828314,18.2553281 17.49,18.2576103 C17.9661554,18.261734 18.3964679,17.974448 18.5752149,17.5330974 C18.753962,17.0917467 18.6448329,16.5859869 18.3,16.2576103 L11.14,9.16761031 Z"
                                                id="Mask"
                                                fill="#8C8F91"
                                                fillRule="nonzero"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
Modal.defaultProps = {
    className: ''
};

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.instanceOf(Array).isRequired
};

const ModalType = {
    LARGE: 'modal-lg',
    XLARGE: 'modal-xl',
    XXLARGE: 'modal-xxl'
};
export { Modal, ModalType };
