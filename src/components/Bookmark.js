import React, { Component, PropTypes } from 'react'

class Bookmark extends Component {
  render() {
    const { bookmark } = this.props

    return (
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <a href={bookmark.link} className="mdl-card__title-text">
                {bookmark.title}
              </a>
            </div>
            <div className="mdl-card__supporting-text">
              {bookmark.description}
            </div>
            <div className="mdl-card__actions mdl-card--border">
              {bookmark.bookmarkcount} users
            </div>
          </div>
        </span>
      </li>
    )
  }
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}

export default Bookmark
