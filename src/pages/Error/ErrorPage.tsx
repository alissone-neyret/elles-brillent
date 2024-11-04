import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorIllustration from '../../assets/404.svg'
import { Header } from '../Homepage/Header'
import './ErrorPage.css'
import { Footer } from '../Homepage/Footer'

export const ErrorPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="errorpage">
      <Header />
      <img className='errorPage_illustration' src={ErrorIllustration} alt="404" />
      <p className='errorPage_text'>Cette page est introuvable</p>
      <button className="homepage_section_registration_button errorpage_cta" type='button' onClick={() => navigate('/')}>Retour à l'accueil</button>
      <Footer />
    </div>
  )
}
