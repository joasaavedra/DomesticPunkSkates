import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLinks } from "./NavLinks";

export const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <FontAwesomeIcon 
                            icon={faBars} size='lg' className='hamburger' 
                            onClick={() => setOpen(!open)}
                            />

    const closeIcon = <FontAwesomeIcon 
                        icon={faTimes} size='lg' className='hamburger' 
                        onClick={() => setOpen(!open)}
                        />    

    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className='mobileNavigation'>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}
