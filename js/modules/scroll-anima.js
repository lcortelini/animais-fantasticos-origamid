import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.8;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    // desestruturação da nodelist (this.section) para usar o mapa na array
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distância de cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      // pageYoffset == posição do scroll do site
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
  }

  //remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
