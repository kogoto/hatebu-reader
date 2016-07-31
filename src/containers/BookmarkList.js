import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
        <ul className="mdl-list">
          {nodes}
        </ul>
      </div>
    )
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks
  }
}

BookmarkList = connect(
  mapStateToProps
)(BookmarkList)

export default BookmarkList
