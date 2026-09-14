class Avaliacao {

  constructor(id, nota, comentario, lugar, usuario) {

    if (!Number.isInteger(nota) || nota < 1 || nota > 5) {
      throw new ErroValidacao(   "A nota deve ser um número inteiro entre 1 e 5.", "nota" );
    }

    if (typeof comentario !== "string" || comentario.trim().length < 3) {
      throw new ErroValidacao(
        "O comentário deve ter pelo menos 3 caracteres.", "comentario" );
    }

    if (!(lugar instanceof Lugar)) {
      throw new ErroValidacao(
        "A avaliação precisa estar associada a um lugar válido.", "lugar");
    }
    if (!(usuario instanceof Usuario)) {
      throw new ErroValidacao ("A avaliação precisa estar associada a um usuário válido.", "usuario");
    }

    this.id = id;
    this.nota = nota;
    this.comentario = comentario.trim();
    this.lugar = lugar;
    this.usuario = usuario;
  }
}