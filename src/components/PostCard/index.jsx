import { Link } from 'react-router-dom'
import styles from './post.module.css'
import { BotaoPrincipal } from '../BotaoPrincipal'

export const PostCard = (props) => {
    return (
        <Link to={`/posts/${props.post.id}`}>
        <div className={styles.post}>
            <img 
                src={`../../../${props.post.id}/capa.png`}
                alt="" 
                className={styles.capa} 
            />
            <h2 className={styles.titulo}>{props.post.titulo}</h2>
            <BotaoPrincipal>
                Ler
            </BotaoPrincipal>
        </div>
        </Link>
    )
}