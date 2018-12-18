import React from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import classNames from "classnames"

import { getPicture } from "../selectors/pictures"

const pictureItemStyle = {
  cursor: "pointer"
}

const pictureStyle = {
  margin: "10px",
  boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.3)"
}
const descriptionStyle = {
  lineHeight: "1.2em",
  height: "3.5em",
  fontSize: "14px",
  width: "150px",
  // whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  margin: "10px"
}
export function PictureItemComponent({ classes, picture }) {
  const pictureClassName = classNames({
    [classes.pictureStyle]: true
  })

  const descriptionClassName = classNames({
    [classes.descriptionStyle]: true
  })

  const pictureItemClassName = classNames({
    [classes.pictureItemStyle]: true
  })
  
  return <div className={pictureItemClassName} onClick={()=>{}}>
    <img className={pictureClassName} src={picture.thumbnailUrl} width="150" height="150"></img>
    <div className={descriptionClassName}>{picture.title}</div>
  </div>
}

const mapStateToProps = (state, props) => {
  return {
    picture: getPicture(state, props)
  }
}

export const PictureItem = injectSheet({
  pictureItemStyle,
  pictureStyle,
  descriptionStyle
})(connect(mapStateToProps)(PictureItemComponent))
