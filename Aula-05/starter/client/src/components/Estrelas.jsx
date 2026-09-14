
function Estrelas({ nota, max = 5 }) {
  const notaArredonda = Math.round(nota)
  return(
    <span className="estrelas"aria-label={`${nota} de ${max} estrelas`}>
     {Array.from({length: max},(_, indice)=>(
      <span key={indice} aria-hidden="true" >
        {indice < notaArredonda ? "▬" : "▭"}
        </span>
     ))}
    </span>
  )
}

export default Estrelas;
