import { PostModelo } from '../../components/PostModelo'
import styles from './sobremim.module.css'
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from '../../assets/minha_foto.jpeg'

export const SobreMim = () => {
    return(
            <PostModelo
            fotoCapa={fotoCapa}
            titulo="sobreMim"
            >
                <h3 className={styles.subtitulo}>
                    Olá eu sou Caio!!
                </h3>

                <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="foto minha" />
                
                <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor <strong>Front-End</strong> e estudo no 3 periodo de ADS no <strong>CESAR school!</strong>
                </p>

                <p className={styles.paragrafo}>
                Minha história com programação começou no Cicero Dias (ETECD), quando fiz o ensino médio tecnico ao curso de desenvolvimento de jogos digitais. Eu aprendi lógica de programação e o básico de várias linguagens, como c#, html, css, além de estudar unity. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
                </p>

                <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Analise e Desenvolvimento de Sistemas no CESAR school. Lá eu participei de diversos programas e um deles foi o kick off, um programa de inovação incrivel!! bom, atualmente eu estou no 2 periodo do curso, no qual aprendi desde Python e desenvolvimento web a C++ com arduino! 
                </p>

                <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
                </p>

                <p className={styles.paragrafo}>
                Até o exato momento tive um desenvolvimento incrivel, obtendo diversos certificados, principalmente quando se trata de desenvolvimento web! por exemplo em React, Next, Tailwind, Styled Components, JavaScript, TypeScript, HTML, CSS, UI UX, Figma, dentre muitos outros!
                </p>

                <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados.  Hoje sou muito feliz de ter a oportunidade e a capacidade de realizar sites completos e com grande escalabilidade!
                </p>

            </PostModelo>
    )
}