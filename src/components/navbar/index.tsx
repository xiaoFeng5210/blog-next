import { FC } from 'react'
import './navbar.scss'
const NavBar: FC = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="links">
          <img className='logo' src="/img/logo.png" alt="" />
          <ul className="list">
            {
              ['Home', 'Studio', 'Works', 'Contact'].map((item, index) => {
                return (
                  <li className='list_item' key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="icons">
          <img src="/img/search.png" alt="" />
          <button>Hire Now</button>
        </div>
      </div>
    </div>
  )
}
export default NavBar
