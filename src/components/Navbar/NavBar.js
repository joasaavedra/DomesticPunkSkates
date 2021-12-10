import { Link } from 'react-router-dom'
import { CartWidget } from '../Cart/CartWidget'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import logo from '../../logo.png'
import './navBar.css'

export const NavBar = () => {
    
    return  <nav className='navBar'>
                <Link className='navBarLeft' to={'/'}>
                    <img className='logo' src={logo} alt="logo"/>
                    <h1>DOMESTIC PUNK SKATES</h1>
                </Link>
                <MobileNavigation />
                <Navigation />
                <CartWidget />
            </nav>
}