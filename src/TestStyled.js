import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TestStyled extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
     <h2> test component </h2>
  )
  }
}
