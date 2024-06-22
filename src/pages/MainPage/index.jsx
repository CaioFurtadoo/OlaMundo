import { Banner } from '../../components/Banner'
import styles from'./mainpage.module.css'
import posts from '../../json/posts.json'
import { PostCard } from '../../components/PostCard'

export const MainPage = () => {
    return(
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
    )
}