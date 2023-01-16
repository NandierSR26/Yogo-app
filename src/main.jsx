import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { BusinessProvider } from './context/Business/BusinessProvider'
import { CartProvider } from './context/cart/CartProvider'
import { UiProvider } from './context/ui/UiProvider'
import "react-toastify/dist/ReactToastify.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BusinessProvider>
        <CartProvider>
          <UiProvider>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </UiProvider>
        </CartProvider>
      </BusinessProvider>
    </BrowserRouter>
  </React.StrictMode>
)
