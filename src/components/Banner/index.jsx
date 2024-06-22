import styles from './banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.jpeg'

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni aut nobis illo ipsum doloribus optio quod vero amet, sit sapiente perferendis at minus, quam tenetur, facilis obcaecati eum repudiandae.</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="" aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto de Caio" />
            </div>
        </div>
    )
}