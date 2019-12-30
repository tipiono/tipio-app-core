import React, {Component} from 'react';

const CardHeader = ({title, titleOnShow, id, onClick, show}) => {
    let titleLabel = title;
    if (titleOnShow && show) {
        titleLabel = titleOnShow;
    }
    return (
        <div className={"customAccordion__item " + (show ? "show" : "")} id={id}>
            <button id={id} className="customAccordion__item--button" onClick={onClick}>
                <a id={id} onClick={onClick}>{titleLabel}</a>
                <svg id={id} onClick={onClick} width={19} height={11}>
                    <path
                        d="M18 1l-8.464 9L1 1"
                        stroke="#8C8F91"
                        strokeWidth={2}
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

const CardBody = ({children, id, show}) => {
    return (
        <div id={id} className={"customAccordion__item--content " + (show ? 'show' : '')}
             data-parent="#accordionExample">
            {children}
        </div>
    );
};

class Accordion extends Component {

    constructor(props) {
        super(props);
        this.headerOnClick = this.headerOnClick.bind(this)
        this.state = {
            active: 0
        }
    }

    headerOnClick(e) {
        e.preventDefault();
        let active = parseInt(e.target.id);
        active = active === this.state.active ? 0 : active;
        this.setState({active})
    }

    render() {
        return (
            <div className="customAccordion" id="accordionExample">
                {React.Children.map(this.props.children, (child, index) => {
                    const {title, titleOnShow} = child.props;
                    const show = this.state.active === index + 1;
                    return [
                        <CardHeader title={title} titleOnShow={titleOnShow} id={index + 1} onClick={this.headerOnClick}
                                    show={show}/>,
                        <CardBody id={index} show={show}>
                            {child}
                        </CardBody>
                    ]
                })}
            </div>
        );
    }
};

export {Accordion};
