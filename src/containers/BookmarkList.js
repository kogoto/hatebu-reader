import React, { Component, PropTypes } from 'react'
import Bookmark from '../components/Bookmark'

class BookmarkList extends Component {
  render() {
    const { bookmarks } = this.props

    let nodes = bookmarks.map(bookmark => {
      return (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
        />
      )
    })

    return (
      <div>
        <ul>
          {nodes}
        </ul>
      </div>
    )
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default BookmarkList
