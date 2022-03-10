const numeroSecreto = parseInt(Math.random() * 11); // Pega um numero aleatorio de 0 a 11

function Chutar() { // Função que chuta o dado
  const elementoResultado = document.getElementById("resultado"); // Pega o elemento resultado
  const chute = parseInt(document.getElementById("valor").value); // Pega o valor do input
  console.log(chute); // Mostra o valor do input
    if (chute == numeroSecreto) { // Se o valor do input for igual ao numero secreto
        elementoResultado.innerHTML = "Você acertou!"; // Mostra a mensagem de acerto

    } else if (chute > 10 || chute < 0) { // Se o valor do input for maior que a condição ou menor que a condição
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10" // Mostra que errou e que o valor deve ser de 0 a 10

    } else { // Se não
        elementoResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto; // Mostra que errou e o numero secreto
    }
    if (chute < 0 || chute > 10) { // Se o valor do input for menor que o numero secreto
        elementoResultado.innerHTML += "O valor sorteado é menor"; // Mostra que é menor
    }
}
