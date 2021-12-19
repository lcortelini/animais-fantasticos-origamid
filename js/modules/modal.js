export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.botaoAbrir = document.querySelector(openButton);
    this.botaoFechar = document.querySelector(closeButton);
    this.containerModal = document.querySelector(modalContainer);
    this.activeClass = "ativo";

    //bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  //abre e fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  //adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  //adiciona eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaModal);
  }

  //quando a seleção for com query selector, ele retorna um valor falsy, sendo desnecessário
  // adicionar o length. Diferente do query selector all, que devolve uma node list
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
