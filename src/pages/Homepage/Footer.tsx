import type { FC } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

export const Footer: FC = () => {
  return (
    <footer>
      <p>
        Elles brillent par{' '}
        <a href="https://www.linkedin.com/in/alissone-neyret/" target="blank">
          Alissone Neyret
        </a>{' '}
        - 2024 ©
      </p>
      <Link to="mentions-legales" className="homepage_footer_legal_notices">
        Mentions légales
      </Link>
    </footer>
  )
}
