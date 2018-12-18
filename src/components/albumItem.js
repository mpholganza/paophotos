import React from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import classNames from "classnames"

import { Link } from "react-router-dom"
import { getAlbum } from "../selectors/albums.js"

const linkStyle = {
  textDecoration: 'none',
  display: 'block',
  padding: '.5em',
  color: 'white',
  '&:hover': {
    background: "#00bfb3",
  }
}

export function AlbumItemComponent({ classes, album }) {
  const className = classNames({
    [classes.linkStyle]: true
  })

  const { title, id } = album
  return <Link className={className} to={`/album/${id}`}>{title}</Link>
}


const mapStateToProps = (state, props) => {
  return {
    album: getAlbum(state, props)
  }
}

export const AlbumItem = injectSheet({
  linkStyle
})(connect(mapStateToProps)(AlbumItemComponent))