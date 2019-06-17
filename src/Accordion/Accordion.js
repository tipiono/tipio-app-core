import React, {Component} from 'react';

const Card = ({children}) => {
  return (
    {children}
  );
};

const CardHeader = ({title, titleOnShow, id, onClick, show}) => {
  let titleLabel = title;
  if (titleOnShow && show) {
    titleLabel = titleOnShow;
  }
  return (
    <div className={"card-header " + (show ? "show" : "")} id={id}>
      <button id={id} className="accordion-link" onClick={onClick}>
        {titleLabel}
        <svg id={id} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={onClick}>
          <g className="nc-icon-wrapper" fill="#8c8f91">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          </g>
        </svg>
      </button>
    </div>
  );
};

const CardBody = ({children, id, show}) => {
  return (
    <div id={id} className={"collapse " + (show ? 'show' : '')} data-parent="#accordionExample">
      <div className="card-body">
        {children}
      </div>
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
        let active =  parseInt(e.target.id);
        active =  active === this.state.active ? 0 : active;
        this.setState({active})
    }

  render() {
    return (
      <div className="accordion-item" id="accordionExample">
        {React.Children.map(this.props.children, (child, index) => {
          const {title, titleOnShow} = child.props;
          const show = this.state.active === index + 1;
          return [
            <CardHeader title={title} titleOnShow={titleOnShow} id={index + 1} onClick={this.headerOnClick} show={show}/>,
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
