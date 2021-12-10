import { Link } from 'react-router-dom'
import './navBar.css'

export const NavLinks = ({ isMobile, closeMobileMenu }) => {

    return (
        <ul className='navBarCenter'>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to={`/category/AGGRESSIVE`}>AGGRESSIVE</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to={`/category/ROLLERBLADING`}>ROLLERBLADING</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to={`/category/QUAD`}>QUADS</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}>BRANDS</li>
            
    </ul>
    )
}