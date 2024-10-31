import type { FC } from 'react'
import Brush from '../../assets/brush.png'
import Stars from '../../assets/stars.png'
import './Homepage.css'

export const Header: FC = () => {
  return (
    <header className="homepage_header">
      <div>
        <h1 className="homepage_header_title">
          <span className="homepage_header_title__pink">Elles</span> BRILLENT
        </h1>
      </div>
      <img className="homepage_header_stars" src={Stars} alt="" />
      <img className="homepage_header_background" src={Brush} alt="" />
    </header>
  )
}
