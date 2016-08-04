import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui'
import * as actionCreators from '../actions/api'
import Bookmark from '../components/Bookmark'

class BookmarkList extends Component {
  render() {
    const { bookmarks } = this.props

    let nodes = bookmarks.map(bookmark => {
      return (
        <ListItem
          key={bookmark.id}
          >
          <Bookmark bookmark={bookmark} />
        </ListItem>
      )
    })
    
    return (
      <List>{nodes}</List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks.bookmarks
  }
}

BookmarkList = connect(
  mapStateToProps,
  actionCreators
)(BookmarkList)

export default BookmarkList
