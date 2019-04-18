import React, { Component } from "react";
import PropTypes from "prop-types";

class Carousel extends Component {
  constructor(props) {

    super(props);
    this.state = {
      active: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  setActive(index) {
    this.setState({ active: index });
  }

  handleClick = (index, e) => {
    e.preventDefault();
    this.setActive(index);
  };
  render() {
    const {className, children, thumbnails} = this.props;
    return (
      <React.Fragment>
        <div className="carousel-card card">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {React.Children.map(children, (child, index) => {
                let itemClassName = "carousel-item";
                if (this.state.active === index) {
                  itemClassName += " active";
                }
                return <div className={itemClassName}>{child}</div>;
              })}
            </div>

            <ol className="carousel-indicators d-lg-none">
              {React.Children.map(children, (child, index) => {
                let linkClassName = "";

                if (this.state.active === index) {
                  linkClassName += " active";
                }

                return (
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={"" + index}
                    className={linkClassName}
                    onClick={e => this.handleClick(index, e)}
                  />
                );
              })}
            </ol>
            {thumbnails && (
              <ul className="carousel-thumbnails">
                {thumbnails.map((item, index) => (
                  <li className="thumbnail-item" onClick={(e)=>{this.handleClick(index, e)}}>
                    <img src={item} alt="..." />
                  </li>
                ))}
              </ul>
            )}

            <a
              to="#carouselExampleIndicators"
              className="carousel-control-prev"
              role="button"
              data-slide="prev"
              onClick={e =>
                this.handleClick((this.state.active - 1 + children.length) % children.length, e)
              }
            >
              <span className="carousel-control-prev-icon" aria-hidden="true">Prev</span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              to="#carouselExampleIndicators"
              className="carousel-control-next"
              role="button"
              data-slide="next"
              onClick={e =>
                this.handleClick((this.state.active + 1 + children.length) % children.length, e)
              }
            >
              <span className="carousel-control-next-icon" aria-hidden="true">Next</span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Carousel.defaultProps = {
  className: "nav nav-tabs"
};

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array).isRequired
};

export default Carousel;
