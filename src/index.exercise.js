// 🐨 you'll need to import react and createRoot from react-dom up here
import React from 'react'
import {createRoot} from 'react-dom/client'
// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from 'components/logo'
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
const App = () => {
  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <div>
        <button>Login</button>
      </div>
      <div>
        <button>register</button>
      </div>
    </div>
  )
}
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
export {root}
