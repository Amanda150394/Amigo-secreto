# Amigo Secreto

Este é um projeto de Amigo Secreto que permite adicionar nomes à lista de amigos e sortear um nome de forma aleatória. O projeto utiliza HTML, CSS e JavaScript para criar uma interface interativa e divertida.

## Funcionalidades

- **Adicionar Nomes**: Os usuários podem adicionar nomes à lista de amigos digitando um nome no campo de texto e clicando no botão "Adicionar".
- **Sorteio Aleatório**: Ao clicar no botão "Sortear Amigo", um nome da lista é selecionado aleatoriamente e exibido na página. O sistema garante que o nome sorteado não seja o próprio nome do usuário.
- **Evitar Sorteio do Próprio Nome**: O usuário insere seu próprio nome para garantir que não sorteie a si mesmo.

## Instruções de Uso

1. Abra o arquivo `index.html` no seu navegador.
2. Digite seu nome no campo "Digite seu nome".
3. Digite o nome dos seus amigos no campo "Digite um nome" e clique em "Adicionar" para adicionar cada nome à lista.
4. Após adicionar todos os nomes, clique em "Sortear Amigo" para sortear um nome aleatoriamente.

## Exemplo de Código

Aqui está um trecho interessante do código JavaScript que garante que o usuário não sorteie o próprio nome:

```javascript
// Função para sortear um amigo
function sortearAmigo() {
  const lista = document.getElementById('listaAmigos');
  const resultado = document.getElementById('resultado');
  const nomeUsuario = document.getElementById('nomeUsuario').value.trim().toLowerCase(); // Converte para minúsculas
  const itens = lista.getElementsByTagName('li');

  if (itens.length === 0) {
    alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
    return;
  }

  if (nomeUsuario === "") {
    alert('Por favor, digite seu nome.');
    return;
  }

  let nomeSorteado;
  let indiceAleatorio;
  let tentativas = 0;

  // Loop para garantir que o nome sorteado seja diferente do nome do usuário
  do {
    indiceAleatorio = Math.floor(Math.random() * itens.length);
    nomeSorteado = itens[indiceAleatorio].textContent.toLowerCase(); // Converte para minúsculas
    tentativas++;
    
    if (tentativas > itens.length) {
      alert('Não foi possível sortear um amigo diferente do seu nome. Adicione mais amigos à lista.');
      return;
    }
  } while (nomeSorteado === nomeUsuario);

  // Limpa a lista de resultados e adiciona o novo resultado
  resultado.innerHTML = '';
  const novoResultado = document.createElement('li');
  novoResultado.textContent = `Amigo sorteado: ${itens[indiceAleatorio].textContent}`; // Mantém o caso original
  resultado.appendChild(novoResultado);
}

##Esse trecho de código é interessante porque utiliza um loop do-while para garantir que o nome sorteado seja sempre diferente do nome do usuário, além de converter os nomes para minúsculas para evitar problemas de capitalização.

##Estrutura do Projeto
index.html: Contém a estrutura HTML do projeto.

style.css: Contém os estilos CSS para a aparência do site.

app.js: Contém a lógica JavaScript para adicionar nomes e realizar o sorteio.
