import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./components/home"
import { User } from "./components/user"
import { Album } from "./components/album"
import { Picture } from "./components/picture"
import { AppBackground } from "./components/appBackground"
import { AppContainer } from "./components/appContainer"
import { Header } from "./components/header"
import {
  getHomePath,
  getUserPathTemplate,
  getAlbumPathTemplate,
  getPicturePathTemplate
} from './config/paths'

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
