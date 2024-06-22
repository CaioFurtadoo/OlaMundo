import styles from './NaoEncontrada.module.css'
import error404 from '../../assets/erro_404.png'
import { BotaoPrincipal } from '../BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export const NaoEncontrada = () => {
    const navegar = useNavigate();
    return (
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
            <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
            <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

            <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                <BotaoPrincipal
                tamanho="lg">
                    Voltar
                </BotaoPrincipal>
            </div>
            <img className={styles.imagemCachorro} src={error404} alt="imagem de erro cachorro" />
        </div>
        <div className={styles.espaçoEmBranco}>

        </div>
        
        </>
    )
}