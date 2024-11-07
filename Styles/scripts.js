const item = document.getElementById("input-item");
const save = document.getElementById("add-button");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

save.addEventListener("click", addItem);

function addItem(evento) {
  evento.preventDefault();
  
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");

  const containerNomeDoItem = document.createElement("div");
  containerNomeDoItem.classList.add("container-nome-compra");

  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("checkbox-container");
  

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);

  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);

  containerCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);


  const nomeDoItem = document.createElement("p");
  nomeDoItem.innerText = item.value;
  containerNomeDoItem.appendChild(nomeDoItem);

  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  const botaoEdit = document.createElement("button");
  botaoEdit.classList.add("button-action");
  botaoRemover.classList.add("button-action");
  const imagemRemover = document.createElement("img");
  const imagemEdit = document.createElement("img");
  imagemRemover.src = "/img/delete.svg";
  imagemRemover.alt = "Remover";
  imagemEdit.src = "/img/edit.svg";
  imagemEdit.alt = "Editar";

  botaoRemover.appendChild(imagemRemover);
  botaoEdit.appendChild(imagemEdit);
  containerBotoes.appendChild(botaoRemover);
  containerBotoes.appendChild(botaoEdit);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  itemDaLista.appendChild(containerItemLista);
  listaDeCompras.appendChild(itemDaLista);
}

