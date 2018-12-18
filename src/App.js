import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./components/home.js"
import { User } from "./components/user.js"
import { Album } from "./components/album.js"
import { Picture } from "./components/picture.js"
import { AppBackground } from "./components/appBackground"
import { AppContainer } from "./components/appContainer"
import { Header } from "./components/header"
import {
  getHomePath,
  getUserPathTemplate,
  getAlbumPathTemplate,
  getPicturePathTemplate
} from './config/paths.js'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <AppBackground>
            <Switch>
              <Route path={getAlbumPathTemplate()} component={Album}></Route>
              <Route exact path={getUserPathTemplate()} component={User}></Route>
              <Route exact path={getHomePath()} component={Home}></Route>
            </Switch>
            <Route exact path={getPicturePathTemplate()} component={Picture}></Route>
          </AppBackground>
        </AppContainer>
      </BrowserRouter>
    )
  }
}

export default App
