import LugarCard from "./LugarCard";


function ListaLugares({ lugares }) {
  if (lugares.length === 0) {
    return <p>Nenhum lugar encontrado.</p>;
  }

  return (
    <div className="cards-grid">
      {lugares.map((lugar) => (
        <LugarCard key={lugar.id} lugar={lugar} />
      ))}
    </div>
  );
}

export default ListaLugares;
