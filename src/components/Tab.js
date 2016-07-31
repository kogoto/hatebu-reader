import React, { Component, PropTypes } from 'react'

class Tab extends Component {
  render() {
    const { id, caption, active, onClick } = this.props

    return (
      <a
        href={`#${id}`}
        className={`mdl-layout__tab ${active ? 'is-active' : ''}`}
        onClick={() => onClick(id)}>
        {caption}
      </a>
    )
  }
}

Tab.PropTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab
