import React from "react"
import injectSheet from 'react-jss'
import classNames from "classnames"

const pictureListStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
}

export function PictureListComponent({ classes, children }) {
  const className = classNames({
    [classes.pictureListStyle]: true
  })

  return <div className={className}>
    {children}
  </div>
}

export const PictureList = injectSheet({
  pictureListStyle
})(PictureListComponent)
