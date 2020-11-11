import { Button } from './src/components/index.js';

(function(name) {
  window.customElements.define(`${name}-button`, Button);
})('my');
