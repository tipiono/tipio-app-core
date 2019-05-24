import React, {Component} from 'react'
import UpIcon from '../static/assets/images/up-arrow.svg'
import DownIcon from '../static/assets/images/down-arrow.svg'

const Card = ({children}) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
};

const CardHeader = ({title, id, onClick, isActive}) => {
  return (
    <div className='card-header' id={id}>
      <h2 className='mb-0'>
        <button id={id} className='btn btn-link' type='button' data-toggle='collapse'
                aria-expanded='true' onClick={onClick}>
          {title}
        </button>
        <a> {isActive ? <img src={UpIcon}/> : <img src={DownIcon}/>}</a>
      </h2>
    </div>
  )
};

const CardBody = ({children, id, show}) => {
  return (
    <div id={id} className={'collapse ' + (show ? 'show' : '')} data-parent='#accordionExample'>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
};

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.headerOnClick = this.headerOnClick.bind(this);
    this.state = {
      active: 0
    }
  }

  headerOnClick(e) {
    let active = parseInt(e.target.id);
    active = active === this.state.active ? 0 : active;
    this.setState({active})
  }

  render() {
    return (
      <div className='accordion' id='accordionExample'>
        {React.Children.map(this.props.children, (child, index) => {
          const {title} = child.props;
          const isActive = this.state.active === index + 1;
          return <Card>
            <CardHeader title={title} id={index + 1} onClick={this.headerOnClick} isActive={isActive}/>
            <CardBody id={index} show={isActive}>
              {child}
            </CardBody>
          </Card>
        })}
      </div>
    )
  }
}

export {Accordion}
