import { Link } from "react-router-dom";

// inteira (o React Router troca só o conteúdo das rotas).
function Cabecalho() {
  return (
    <header className="cabecalho">
      <Link to="/" className="cabecalho__logo">
        📍 Avaliações
      </Link>
      <nav className="cabecalho__nav">
        <Link to="/">Lugares
        </Link>
      </nav>
    </header>
  );
}

export default Cabecalho;
