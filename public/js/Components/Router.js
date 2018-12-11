import { h } from 'preact'
import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'

export default () => (
  <Router>
    <AsyncRoute path="/" getComponent={(url, cb, props) => import('./Home/Home').then(module => module.default)}></AsyncRoute>
    <AsyncRoute path="/invite" getComponent={(url, cb, props) => import('./Invite/Invite').then(module => module.default)} />
    <AsyncRoute path="/download" getComponent={(url, cb, props) => import('./Invite/Download').then(module => module.default)} />
  </Router>
);