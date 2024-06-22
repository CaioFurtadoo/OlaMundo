import { Link, useLocation } from 'react-router-dom'
import styles from './menu.module.css'
import { MenuLink } from '../MenuLink';

export const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink 
                pathname="/"
                texto="Inicio"
                >
                    Inicio
                </MenuLink>

                <MenuLink
                pathname="/sobremim"
                texto="Sobre mim"
                >
                    Sobre mim
                </MenuLink>                
            </nav>
        </header>
    )
}