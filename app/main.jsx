'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import axios from 'axios'
import  {getFaces} from './reducers/faces'
import FacesContainer from './containers/FacesContainer'

const onAppEnter = () => {
  //const pFaces = axios.get('/api/faces')
  // const pUsers = axios.get('/api/users')
  // return Promise.all([pFaces])
  //   .then(responses => responses.map(r => r.data))
  //   .then(([faces]) => {
  //     store.dispatch(receiveFaces(faces));
  //   })
  store.dispatch(getFaces())
}

const onFacesEnter = () => {
  const faces = axios.get('/api/faces')
  store.dispatch(receiveFaces(faces))
}

import FaceContainer from './containers/FaceContainer'
import FacesContainer from './containers/FacesContainer'

import {getFaces} from './reducers/faces'
import {getFace} from './reducers/faces'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
     <Navbar />
      {children}
    </div>
)

const onAppEnter = () => {
  store.dispatch(getFaces())
}

const onFaceEnter = function (nextRouterState) {
  const faceId = nextRouterState.params.faceId;
  store.dispatch(getFace(faceId))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={FacesContainer} onEnter={onAppEnter} />
        <Route path="/faces/:faceId" component={FaceContainer} onEnter={onFaceEnter}/>
        <Route path="/faces" component={FacesContainer} onEnter={onAppEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
