import React from "react"
import injectSheet from 'react-jss'
import classNames from "classnames"

const albumListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

export function AlbumListComponent({ classes, children }) {
  const className = classNames({
    [classes.albumListStyle]: true
  })

  return <div className={className}>
    {children}
  </div>
}

export const AlbumList = injectSheet({
  albumListStyle
})(AlbumListComponent)
