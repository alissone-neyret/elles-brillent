import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import { Homepage } from './pages/Homepage/Homepage'
import { LegalNotices } from './pages/LegalNotice/LegalNotices'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "mentions-legales",
    element: <LegalNotices />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
