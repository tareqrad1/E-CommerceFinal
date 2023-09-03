import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/Store.js'
import SelectProvider from './context/selectProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <SelectProvider>
            <App />
          </SelectProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    
  </React.StrictMode>,
)
