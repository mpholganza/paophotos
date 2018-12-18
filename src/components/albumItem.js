import React from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import classNames from "classnames"

import { Link } from "react-router-dom"
import { getCurrentAlbumTitle, getCurrentAlbumId } from "../selectors/albums.js"
import { getCurrentUserId } from "../selectors/users.js"

const linkStyle = {
  textDecoration: 'none',
  display: 'block',
  padding: '.5em',
  color: 'white',
  '&:hover': {
    background: "#00bfb3",
  }
}

export function AlbumItemComponent({ classes, albumId, albumTitle, userId }) {
  const className = classNames({
    [classes.linkStyle]: true
  })

  return <Link className={className} to={`/user/${userId}/album/${albumId}`}>{albumTitle}</Link>
}

const mapStateToProps = (state, props) => {
  return {
    albumId: getCurrentAlbumId(state, props),
    albumTitle: getCurrentAlbumTitle(state, props),
    userId: getCurrentUserId(state, props)
  }
}

export const AlbumItem = injectSheet({
  linkStyle
})(connect(mapStateToProps)(AlbumItemComponent))