import Estrelas from "./Estrelas";
import { ICONES_CATEGORIA } from "../data/iconesCategoria";

function LugarCard({ lugar }) {
  return (
    <article className="card" data-categoria={lugar.categoria.toLowerCase()}>
      <div className="card-banner" aria-hidden="true">
        {ICONES_CATEGORIA[lugar.categoria] ?? "📍"}
      </div>
      <div className="card-body">
        <span className="badge">{lugar.categoria}</span>
        <h2 className="card-title">{lugar.nome}</h2>
        <p className="card-cidade">📍 {lugar.cidade}</p>
        <p className="card-descricao">{lugar.descricao}</p>
        <Estrelas nota={lugar.notaMedia} />
        <a className="card-link" href={`#/lugares/${lugar.id}`}>
          Ver detalhes
        </a>
      </div>
    </article>
  );
}

export default LugarCard;
