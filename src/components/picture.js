import React from "react"
import { connect } from "react-redux"

import { getAlbumPath } from "../config/paths"

// Selectors
import { getPicture } from "../selectors/pictures"
import { getCurrentUserId } from "../selectors/users"
import { getCurrentAlbumId } from "../selectors/albums"

// Components
import { Overlay } from "./overlay"
import { Link } from "react-router-dom"

export function PictureComponent({ picture, userId, albumId }) {
  return <Link to={getAlbumPath(userId, albumId)}>
    <Overlay>
      {(() => {
        if (!picture) return "Loading ..."
        const { url, title } = picture
        return <>
          <img src={url} height="600" width="600"></img>
          <h3 style={{color: "white"}}>{title}</h3>
        </>
      })()}
    </Overlay>
  </Link>
}

const mapStateToProps = (state, props) => {
  return {
    albumId: getCurrentAlbumId(state, props),
    userId: getCurrentUserId(state, props),
    picture: getPicture(state, props)
  }
}

export const Picture = connect(mapStateToProps)(PictureComponent)
