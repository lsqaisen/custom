class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `${this.render()}`;
  }

  render() {
    return /*html*/ `
    <my-tabs>
        <my-button slot="title">1</my-button>
        <my-button slot="title">2</my-button>
        <my-button slot="title">3</my-button>
        <div>content panel 1</div>
        <div>content panel 14</div>
        <div>content panel 1</div>
        <div>content panel 112</div>
      </my-tabs>
      `;
  }
}

window.customElements.define(`my-app`, App);
