import React from "react"
import { connect } from "react-redux"
import injectSheet from "react-jss"

import { getPicturePath } from "../config/paths"

// Selectors
import { getPicture } from "../selectors/pictures"

// Components
import { Link } from "react-router-dom"

// Styles
import { linkStyle } from "../styles/link"

const pictureStyle = {
  margin: "10px",
  boxShadow: "3px 3px 7px 0px rgba(0,0,0,0.2)"
}
const descriptionStyle = {
  lineHeight: "1.2em",
  height: "3.5em",
  fontSize: "14px",
  width: "150px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  margin: "10px"
}

export function PictureItemComponent({ classes, picture, userId, albumId }) {
  return <Link className={classes.linkStyle} to={getPicturePath(userId, albumId, picture.id)}>
    <img className={classes.pictureStyle} src={picture.thumbnailUrl} alt={picture.title} width="150" height="150"></img>
    <div className={classes.descriptionStyle}>{picture.title}</div>
  </Link>
}

const mapStateToProps = (state, props) => {
  return {
    picture: getPicture(state, props)
  }
}

export const PictureItem = injectSheet({
  pictureStyle,
  descriptionStyle,
  linkStyle
})(connect(mapStateToProps)(PictureItemComponent))
