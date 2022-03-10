const numeroSecreto = parseInt(Math.random() * 11); // Pega um numero aleatorio de 0 a 11
let maximoTentativas = 3; // Define o numero maximo de tentativas
let numeroTentativas = 1;

function Chutar() { // Função que chuta o dado
    let numeroTentativasAtuais = maximoTentativas - numeroTentativas; // Define o numero de tentativas
    let resultado = document.getElementById("resultado"); // Pega o elemento resultado
    let chute = parseInt(document.getElementById("valor").value); // Pega o valor do input
    console.log(chute);

    if (numeroTentativas <= maximoTentativas) { // Verifica se o numero de tentativas é menor ou igual ao maximo
        if (chute > 10 || chute < 0) { // Verifica se o valor do input é maior que 10 ou menor que 0
            resultado.innerHTML = "Você deve digitar um número de 0 a 10"; // Exibe mensagem de erro
        }
        else if (chute == numeroSecreto) { // Verifica se o valor do input é igual ao numero secreto
            resultado.innerHTML = "Você acertou!"; // Exibe mensagem de acerto

        } else if (numeroTentativasAtuais === 0 ) { // Verifica se o numero de tentativas é igual a 0
            resultado.innerHTML = "Você excedeu o numero de tentativas!"; // Exibe mensagem de erro
            numeroTentativas = 1;
            numeroSecreto = parseInt(Math.random() * 11);
        } else { // Se não for nenhum dos casos acima
            numeroTentativas++; // Incrementa o numero de tentativas
            resultado.innerHTML = `Você errou! você ainda tem  ${numeroTentativasAtuais}`; // Exibe mensagem de erro
        }
    }
}

