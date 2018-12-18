import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./components/home.js"
import { User } from "./components/user.js"
import { Album } from "./components/album.js"
import { Picture } from "./components/picture.js"
import { AppBackground } from "./components/appBackground"
import { AppContainer } from "./components/appContainer"
import { Header } from "./components/header"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Header></Header>
          <AppBackground>
            <Route exact path="/" component={Home}></Route>
            <Route path="/user/:userId" component={User}></Route>
            <Route path="/album/:albumId" component={Album}></Route>
            <Route path="/picture/:pictureId" component={Picture}></Route>
          </AppBackground>
        </AppContainer>
      </BrowserRouter>
    )
  }
}

export default App;
