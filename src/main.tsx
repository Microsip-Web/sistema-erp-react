import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { theme } from './theme/theme'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* basename is used to avoid the issue of the app not being found when the url is not the root
      testing is /testing/sistema-erp
      production is /sistema-erp
      */}
      <BrowserRouter basename="/testing/sistema-erp">
        <div className="sistema-erp-react-mui">
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
