import './global.css'

import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-500 ">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
