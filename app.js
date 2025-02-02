
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    const nome = input.value;
  
    if (nome.trim() !== "") {
      const novoItem = document.createElement('li');
      novoItem.textContent = nome;
      lista.appendChild(novoItem);
      input.value = "";
    } else {
      alert('Por favor, digite um nome.');
    }
  }
  
 
  function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    const nomeUsuario = document.getElementById('nomeUsuario').value.trim().toLowerCase(); 
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
  
    
    do {
      indiceAleatorio = Math.floor(Math.random() * itens.length);
      nomeSorteado = itens[indiceAleatorio].textContent.toLowerCase(); 
      tentativas++;
      
      if (tentativas > itens.length) {
        alert('Não foi possível sortear um amigo diferente do seu nome. Adicione mais amigos à lista.');
        return;
      }
    } while (nomeSorteado === nomeUsuario);
  
    
    resultado.innerHTML = '';
    const novoResultado = document.createElement('li');
    novoResultado.textContent = `Amigo sorteado: ${itens[indiceAleatorio].textContent}`; 
    resultado.appendChild(novoResultado);
  }
  
  