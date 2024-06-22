import { Children } from 'react'
import styles from './BotaoPrincipal.module.css'

export const BotaoPrincipal = ({ children, tamanho }) => {
    return (
        <button className={`
            ${styles.botao}
            ${styles[tamanho]}`}>{children}</button>
    )
}