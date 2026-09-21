function Estrelas({ nota, max = 5 }) {
  const notaArredondada = Math.round(nota);

  return (
    <span className="estrelas" aria-label={`${nota} de ${max} estrelas`}>
      {Array.from({ length: max }, (_, indice) => (
        <span key={indice} aria-hidden="true">
          {indice < notaArredondada ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default Estrelas;
