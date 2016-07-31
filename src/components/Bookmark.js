import React, { Component, PropTypes } from 'react'

class Bookmark extends Component {
  render() {
    const { bookmark } = this.props

    return (
      <li>
        <a href={bookmark.link}>{bookmark.title}</a>
      </li>
    )
  }
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}

export default Bookmark
