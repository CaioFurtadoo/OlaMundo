import { Link, useLocation } from 'react-router-dom';
import styles from './menulink.module.css'

export const MenuLink = (props) => {
    const localizacao = useLocation();
    return(
            <Link className={`
                ${styles.link} 
                ${localizacao.pathname === props.pathname ? styles.linkDestacado : ""}
                `} to={props.pathname}>{props.texto}
            </Link>
    )
}