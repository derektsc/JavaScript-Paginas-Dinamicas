import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista(item){
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");

  const containerNomeDoItem = document.createElement("div");
  

  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("checkbox-container");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);

  checkboxLabel.addEventListener("click", function (evento) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input")
    const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
    const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
    if (checkboxInput.checked){
      checkboxCustomizado.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaComprados.appendChild(itemDaLista);
    } else{
      checkboxCustomizado.classList.remove("checked");
      listaDeCompras.appendChild(itemDaLista);
      itemTitulo.style.textDecoration = "none";
    }

    verificarListaComprados(listaComprados)
  });

  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);

  containerCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);

  const nomeDoItem = document.createElement("p");
  nomeDoItem.id = "item-titulo";
  nomeDoItem.innerText = item;
  containerNomeDoItem.appendChild(nomeDoItem);

  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  const botaoEdit = document.createElement("button");
  botaoEdit.classList.add("button-action")
  botaoRemover.classList.add("button-action");
  const imagemRemover = document.createElement("img");
  const imagemEdit = document.createElement("img");
  imagemRemover.src = "/img/delete.svg";
  imagemRemover.alt = "Remover";
  imagemEdit.src = "/img/edit.svg";
  imagemEdit.alt = "Editar";

  botaoEdit.addEventListener("click", function() {
    editarItem(itemDaLista);
  })

  botaoRemover.addEventListener("click", function (){
    excluirItem(itemDaLista);
  })

  botaoRemover.appendChild(imagemRemover);
  botaoEdit.appendChild(imagemEdit);
  containerBotoes.appendChild(botaoRemover);
  containerBotoes.appendChild(botaoEdit);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  const itemData = document.createElement("p");
  itemData.innerText = gerarDiaDaSemana();
  itemData.classList.add("texto-data");

  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);

  return itemDaLista;
}