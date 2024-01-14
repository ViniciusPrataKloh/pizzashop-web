import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/ThemeProvider'
import { Router } from './Router'

function App() {
  return (
    <div className="">
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="pizzashop-ui-theme">
          <Helmet titleTemplate="%s | pizza.shop" />
          <Toaster richColors />

          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
