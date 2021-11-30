import logo from '../../logo.png'
import { CartWidget } from '../Cart/CartWidget'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import './navBar.css'

export const NavBar = () => {
    
    return  <nav className='navBar'>
                <div className='navBarLeft'>
                    <img className='logo' src={logo} alt="logo"/>
                    <h1>DOMESTIC PUNK SKATES</h1>
                </div>
                <MobileNavigation />
                <Navigation />
                <CartWidget />
            </nav>
}