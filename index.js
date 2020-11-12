import { Button, Tabs } from './src/components/index.js';

(function(name) {
  window.customElements.define(`${name}-button`, Button);
  window.customElements.define(`${name}-tabs`, Tabs);
})('my');
