import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { Router } from './lib/Router';


function App() {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-500'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
