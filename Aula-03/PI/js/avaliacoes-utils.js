function calcularMedia(avaliacoes) {
  if (!avaliacoes || avaliacoes.length === 0) {
    return 0;
  }
  var soma = avaliacoes.reduce(function (total, avaliacao) {
    return total + avaliacao.nota;
  }, 0);
  return Math.round((soma / avaliacoes.length) * 10) / 10;
}

function filtrarPorLugar(avaliacoes, lugarId) {
  return avaliacoes.filter(function (avaliacao) {
    return avaliacao.lugarId === lugarId;
  });
}


function filtrarPorNotaMinima(avaliacoes, notaMinima) {
  return avaliacoes.filter(function (avaliacao) {
    return avaliacao.nota >= notaMinima;
  });
}

function ordenarPorNota(avaliacoes, ordem) {
  ordem = ordem || "desc";
  var copia = avaliacoes.slice();
  copia.sort(function (a, b) {
    return ordem === "asc" ? a.nota - b.nota : b.nota - a.nota;
  });
  return copia;
}
