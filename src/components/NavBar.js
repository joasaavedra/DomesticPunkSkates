import logo from '../logo.png';
import './navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    return  <nav className='navBar'>
                <div className='navBarLeft'>
                    <img className='logo' src={logo} alt="logo"/>
                    <h1>Domestic Punk Skates</h1>
                </div>
                <ul className='navBarCenter'>
                    <li>Aggressive</li>
                    <li>Rollerblading</li>
                    <li>Quads</li>
                    <li>Brands</li>
                </ul>
                <div className='navBarRight'>
                    <FontAwesomeIcon icon={faShoppingCart} size='lg' className='cartIcon'/>
                </div>
            </nav>
}