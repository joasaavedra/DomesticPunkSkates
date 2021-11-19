import logo from '../logo.png'
import { CartWidget } from './CartWidget'
import './navBar.css'


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
                <CartWidget />
            </nav>
}