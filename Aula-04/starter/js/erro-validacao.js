// Class: Cria uma Classe
//Extends: Herda de outra Classe
//Error: Classe Padrão de Erros do JavaScript
//Constructor - Executa quando usamos new
//New (Oculto): Cria um objeto
//Super: Chama o constructor da classe pai
//This: Representa o objeto atual
//Throw (Oculto): Lança o Erro
//Instanceoff (Oculto): Verificação de qual classe o objeto veio

class ErroValidacao extends Error {
  constructor(mensagem, campo) {
    super(mensagem)
      this.name="ErroValidacao"
      this.campo= campo
  }
}
