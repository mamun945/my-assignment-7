import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routers/Routers'
import UseContextProvider from './Context/UseContextProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseContextProvider>
         <RouterProvider router={router}></RouterProvider>
    </UseContextProvider>
    
  </StrictMode>,
)
