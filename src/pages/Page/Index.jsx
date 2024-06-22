import { Route, Routes, useParams } from 'react-router-dom';
import './post.css'
import posts from '../../json/posts.json'
import { PostModelo } from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown'
import { NaoEncontrada } from '../../components/NaoEncontrada';
import { PaginaPadrao } from '../../components/PaginaPadrao';

export const Post = () => {
    
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post){
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
            <Route index element={        <PostModelo 
        fotoCapa={`../../../public/${post.id}/capa.png`}
        titulo={post.titulo}
        >
            <div className='post-markdown-container'>
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
            </div>
        </PostModelo>}/>
            </Route>
        </Routes>
    )
}