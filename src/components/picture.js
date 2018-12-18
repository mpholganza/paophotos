import React from "react"
import { Overlay } from "./overlay"

export function Picture(props) {
  const { pictureId, name } = props
  return <Overlay>
    <div>Loading ...</div>
  </Overlay>
}