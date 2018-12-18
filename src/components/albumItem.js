import React from "react"
import { connect } from "react-redux"
import injectSheet from "react-jss"
import classNames from "classnames"
import { getAlbumPath } from "../config/paths"

// Selectors
import { getCurrentAlbumTitle, getCurrentAlbumId } from "../selectors/albums"
import { getCurrentUserId } from "../selectors/users"

// Components
import { Link } from "react-router-dom"

// Styles
import { linkStyle } from "../styles/link"

export function AlbumItemComponent({ classes, albumId, albumTitle, userId }) {
  return <Link className={classes.linkStyle} to={getAlbumPath(userId, albumId)}>{albumTitle}</Link>
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