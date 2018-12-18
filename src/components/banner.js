import React from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import classNames from "classnames"

const bannerStyle = {
  width: "100%",
  backgroundColor: "#00bfb3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

const bannerHeaderStyle = {
  maxWidth: "430px",
  textAlign: "center",
  fontFamily: "'Cormorant Infant', sans-serif",
  fontStyle: "oblique"
}

export function BannerComponent({ classes, albumId, albumTitle, userId }) {
  const bannerClassName = classNames({
    [classes.bannerStyle]: true
  })

  const bannerHeaderClassName = classNames({
    [classes.bannerHeaderStyle]: true
  })

  return <div className={bannerClassName}>
    <h3 className={bannerHeaderClassName}>
      {"Beautiful Placeholder Photos By The World's Best Placeholder Photographers"}
    </h3>
  </div>
}
export const Banner = injectSheet({
  bannerStyle,
  bannerHeaderStyle
})(BannerComponent)