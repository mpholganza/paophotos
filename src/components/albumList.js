import React from "react"
import injectSheet from "react-jss"

const albumListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

export function AlbumListComponent({ classes, children }) {
  return <div className={classes.albumListStyle}>
    {children}
  </div>
}

export const AlbumList = injectSheet({
  albumListStyle
})(AlbumListComponent)
