// Um exemplo de código ruim em JavaScript

function calcularSoma(a, b) {
  resultado = a + b; // Variável global não declarada
  return resultado; // Falta de ponto e vírgula
}

function verificarmaioridade(idade) {
  if (idade >= 18) return true;
  // Bloco de código desnecessário
  else return false; // Uso desnecessário do "else"
}

// Uso de eval, geralmente evitado por questões de segurança
function executarcodigodinamico() {
  let codigo = prompt("Digite um código:");
  eval(codigo);
}

// Manipulação direta do DOM sem checagem
function alterarTexto() {
  document.getElementById("meuElemento").innerHTML = "Novo texto";
}
