import { useState } from "react";

function FormularioAvaliacao({ lugares, aoEnviar }) {
  const [lugarId, setLugarId] = useState(lugares[0]?.id ?? "");
  const [nota, setNota] = useState(5);
  const [comentario, setComentario] = useState("");
  const [erro, setErro] = useState(null);

  function lidarComEnvio(evento) {
    evento.preventDefault();

    if (!lugarId) {
      setErro("Escolha um lugar.");
      return;
    }

    if (comentario.trim().length < 3) {
      setErro("O comentário precisa ter ao menos 3 caracteres.");
      return;
    }

    setErro(null);

    aoEnviar(Number(lugarId), {
      nota: Number(nota),
      comentario: comentario.trim(),
    });

    setComentario("");
    setNota(5);
  }

  return (
    <form className="formulario" onSubmit={lidarComEnvio}>
      <div className="campo-formulario">
        <label htmlFor="campo-lugar">Lugar</label>

        <select
          id="campo-lugar"
          value={lugarId}
          onChange={(e) => setLugarId(e.target.value)}
        >
          {lugares.map((lugar) => (
            <option key={lugar.id} value={lugar.id}>
              {lugar.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario">
        <label htmlFor="campo-nota">Nota</label>

        <select
          id="campo-nota"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        >
          {[5, 4, 3, 2, 1].map((valor) => (
            <option key={valor} value={valor}>
              {valor} {valor === 1 ? "estrela" : "estrelas"}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario">
        <label htmlFor="campo-comentario">Comentário</label>

        <textarea
          id="campo-comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          rows={3}
          placeholder="Conte como foi sua experiência..."
        />
      </div>

      {erro && <p className="estado-erro">{erro}</p>}

      <button type="submit" className="botao">
        Enviar Avaliação
      </button>
    </form>
  );
}

export default FormularioAvaliacao;
