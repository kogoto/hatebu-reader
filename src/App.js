import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookmarkList from './containers/BookmarkList'
import * as actionCreators from './actions/api'

class App extends Component {
  componentDidMount() {
    this.handleFetchBookmarks()
  }

  handleFetchBookmarks() {
    this.props.fetchBookmarks()
  }

  render() {
    const { bookmarks } = this.props

    return (
      <div className="App">
        <BookmarkList bookmarks={bookmarks} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks
  }
}

App = connect(mapStateToProps, actionCreators)(App)

export default App
