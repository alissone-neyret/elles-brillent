import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/Error/ErrorPage'
import { Homepage } from './pages/Homepage/Homepage'
import { LegalNotices } from './pages/LegalNotice/LegalNotices'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'mentions-legales',
    element: <LegalNotices />,
  },
])

export default function App() {
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}