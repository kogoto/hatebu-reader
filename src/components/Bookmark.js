import React, { Component, PropTypes } from 'react'
import { Card, CardHeader, CardText } from 'material-ui'

class Bookmark extends Component {
  render() {
    const { bookmark } = this.props
    const title = (<a href={bookmark.link} target="_blank">{bookmark.title}</a>)

    return (
      <Card>
        <CardHeader title={title} subtitle={`${bookmark.bookmarkcount} users`}/>
        <CardText>
          {bookmark.description}
        </CardText>
      </Card>
    )
  }
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}

export default Bookmark
