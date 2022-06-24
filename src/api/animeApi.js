import axios from "axios"


const api = axios.create({
    baseURL:'http://localhost:5000'
}) 

export async function Anime(nome) {
    const resposta = await api.post(`/anime`, {
        nome:nome
    });

    return resposta
}

export async function Animes() {
    const resposta = await api.get(`/anime`)
    return resposta.data
}