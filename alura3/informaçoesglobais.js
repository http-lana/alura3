const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformaçoesglobais() {
    const res = await fetch(url)
    const dados = await res.json()
const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Voce sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e
 que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e 
 passam em média ${dados.tempo_conectada} horas conectadas?`

 const container = document.getElementById('graficos-container')
 container.appendChild(paragrafo)
}
vizualizarinformaçoesglobais()