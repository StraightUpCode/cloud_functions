import { render, h } from 'preact';
//import App from './Components/Router'
import '../styles/index.scss'

const placeholder = document.querySelector('#app')
//render(<App />, placeholder)
import('./Components/Router')
  .then(module => module.default)
  .then(App => {
    render(<App />, placeholder)
  })

