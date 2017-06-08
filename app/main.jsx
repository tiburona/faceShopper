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
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
