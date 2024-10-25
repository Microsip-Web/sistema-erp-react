import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App.tsx'
import { theme } from './theme/theme'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
    <ThemeProvider theme={theme}>
      <div className="sistema-erp-react-mui">
        <App />
      </div>
    </ThemeProvider>
  </StrictMode>,
)
