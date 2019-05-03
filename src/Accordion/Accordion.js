import React, {Component} from 'react';

const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

const CardHeader = ({title, id, onClick}) => {
    return (
        <div className="card-header" id={id}>
            <h2 className="mb-0">
                <button id={id} className="btn btn-link" type="button" data-toggle="collapse"
                        aria-expanded="true" onClick={onClick}>
                    {title}
                </button>
            </h2>
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

    constructor(props){
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
            <div className="accordion" id="accordionExample">
                {this.props.children.map((child, index) => {
                    const { title } = child.props;
                    return  <Card>
                                <CardHeader title={title} id={index+1} onClick={this.headerOnClick}/>
                                <CardBody id={index} show={this.state.active === index+1}>
                                    {child}
                                </CardBody>
                            </Card>;
                })}
            </div>
        );
    }
};

export {Accordion};
