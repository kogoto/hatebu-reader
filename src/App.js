import React, { Component } from 'react'
import Header from './containers/Header'
import Content from './containers/Content'
import BookmarkList from './containers/BookmarkList'
import { CATEGORIES } from './constants/ApiCategory'
import 'material-design-lite/material.js'
import 'material-design-lite/material.css'
import './App.css'

class App extends Component {
  render() {
    let tabs = Object.keys(CATEGORIES).map(key => ({
      id: key,
      caption: CATEGORIES[key].name,
      active: CATEGORIES[key].default
    }))

    let contents = Object.keys(CATEGORIES).map(key => ({
      id: key,
      content: (
        <BookmarkList category={key} />
      )
    }))

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title="ホッテントリ" tabs={tabs} />
        <Content panels={contents} />
      </div>
    )
  }
}

export default App
