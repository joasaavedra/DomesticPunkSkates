import './navBar.css'

export const NavLinks = ({ isMobile, closeMobileMenu}) => {

    return (
        <ul className='navBarCenter'>
            <li onClick={() => isMobile && closeMobileMenu()}>AGGRESSIVE</li>
            <li onClick={() => isMobile && closeMobileMenu()}>ROLLERBLADING</li>
            <li onClick={() => isMobile && closeMobileMenu()}>QUADS</li>
            <li onClick={() => isMobile && closeMobileMenu()}>BRANDS</li>
    </ul>
    )
}