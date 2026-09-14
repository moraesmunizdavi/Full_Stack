var BASE_DADOS = "dados/"

async function buscarLugares() {
  const resposta = await fetch (BASE_DADOS + "lugares.json")
  if(!resposta.ok){
    throw new Error("Não foi possível carregar os lugares(HTTP "+ resposta.status +")")
  }
  return resposta.json()
}

async function buscarAvaliacoes() {
  const resposta = await fetch (BASE_DADOS + "avaliacoes.json")
  if(!resposta.ok){
    throw new Error("Não foi possível carregar as avaliações(HTTP "+ resposta.status +")")
  }
  return resposta.json()
}

async function buscarCaminhoInexistente() {
    const resposta = await fetch (BASE_DADOS + "arquivo-que-nao-existe")
    if(!resposta.ok){
      throw new Error("Recurso não encontrado(HTTP "+ resposta.status +")")
    }
    return resposta.json()
  }

