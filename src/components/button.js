const template = document.createElement('template');
template.innerHTML = /*html*/ `
    <style>
      :host {
        line-height:1.5715;
        position:relative;
        display:inline-block;
        font-weight:400;
        white-space:nowrap;
        text-align:center;
        background-image:none;
        -webkit-box-shadow:0 2px 0 rgba(0,0,0,.015);
        box-shadow:0 2px 0 rgba(0,0,0,.015);
        cursor:pointer;
        -webkit-transition:all .3s cubic-bezier(.645,.045,.355,1);
        transition:all .3s cubic-bezier(.645,.045,.355,1);
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        -ms-touch-action:manipulation;
        touch-action:manipulation;
        height:32px;
        padding:4px 15px;
        font-size:14px;
        border-radius:2px;
        color:rgba(0,0,0,.85);
        background:#fff;
        border:1px solid #d9d9d9
      }
      :host([hidden]) {
        display: none;
      }
      :host([checked]) {
        background: url('https://googlechromelabs.github.io/howto-components/images/checked-checkbox.svg') no-repeat;
        background-size: contain;
      }
      :host([disabled]) {
        background:
          url('https://googlechromelabs.github.io/howto-components/images/unchecked-checkbox-disabled.svg') no-repeat;
        background-size: contain;
      }
      :host([checked][disabled]) {
        background:
          url('https://googlechromelabs.github.io/howto-components/images/checked-checkbox-disabled.svg') no-repeat;
        background-size: contain;
      }
    </style>
  `;
class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
export default Button;
