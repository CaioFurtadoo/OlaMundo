import styles from './rodape.module.css'
import MarcaRegistrada from '../../assets/marca_registrada.svg';
export const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img src={MarcaRegistrada} alt="" />
            desenvolvido por Caio Furtado
        </footer>
    )
}