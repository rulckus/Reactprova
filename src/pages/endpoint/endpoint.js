import { useState } from 'react';
import { Anime, Animes } from '../../api/animeApi'

export default function End() {
    const [nome, setNome] = useState('');
    const [resul, setResul] = useState([]);


    async function postarClick() {
        const resposta = await Anime(nome);
    }

    async function consultarClick() {
        const respostas = await Animes(resul);
        setResul(respostas)

    }
    console.log(resul);
    return (
        <div>

            <div>
                <p>Insira o Nome do Anime:</p>
                <div>
                    <input type="text" placeholder='nome do anime' name='nm_anime' value={nome} onChange={(e) => setNome(e.target.value)} />
                    <button onClick={postarClick}> Inserir </button>
                </div>
            </div>

        <table>
            <tr>
                <td>
                {resul.map((item) => {
                        return (
                            <div>{item.nm_anime}</div>
                        )
                    })}
                </td>
            </tr>
        </table>
        <button onClick={consultarClick}>Consultar</button>


        </div>
    );
}