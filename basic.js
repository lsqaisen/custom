export function render(container) {
  const name = container.name
    .replace(/(?!^)([A-Z])/g, (v) => `-${v}`)
    .toLocaleLowerCase();
  customElements.define(name, container);
}

export class Component extends HTMLElement {
  constructor() {
    super();
    this.innerTHML = this.render();
  }

  static render() {
    return '';
  }
}
