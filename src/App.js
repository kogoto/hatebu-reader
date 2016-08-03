import React, { Component } from 'react'
import MainMenu from './containers/MainMenu'
import Header from './containers/Header'
import BookmarkList from './containers/BookmarkList'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu />
        <Header title="はてぶ" />
        <BookmarkList />
      </div>
    )
  }
}

export default App
