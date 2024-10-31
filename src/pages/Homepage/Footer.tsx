import type { FC } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer: FC = () => {
  return (
    <footer>
      <div>
        <p className='footer_content'>
          Elles brillent par{' '}
          <a href="https://www.linkedin.com/in/alissone-neyret/" target="blank">
            Alissone Neyret
          </a>{' '}
          - 2024 ©
        </p>
        <Link to="mentions-legales" className="footer_legal_notices">
          Mentions légales
        </Link>
      </div>
    </footer>
  )
}
