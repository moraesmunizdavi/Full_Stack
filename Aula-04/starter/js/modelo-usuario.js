class Usuario {
  constructor(id, nome, email, senhaHash) {
    if (typeof nome !== "string" || nome.trim().length < 2){
      throw new ErroValidacao("O nome do usuário deve ter pelo menos 2 caracteres.","nome")
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ErroValidacao("Email Inválido", "email");
  }
    if (typeof senhaHash !== "string" || senhaHash.trim().length === 0 ){
      throw new ErroValidacao
      (" A SenhaHash é obrigatória e não pode ser armazenada como texto puro.","senhaHash");
    }
    this.id = id
    this.nome = nome.trim()
    this.email = email.trim().toLowerCase()
    }
  }

