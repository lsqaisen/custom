export function customElement(name) {
  return function(container) {
    customElements.define(name, container);
  };
}

// export class Component extends HTMLElement {
//   constructor(props) {
//     console.log(props);
//     super(props);
//     this.innerTHML = this.render();
//   }

//   static render() {
//     return '';
//   }
// }

function render(h) {
  var script = document.createElement('script');
  script.type = 'module';
  script.innerHTML = h;
  document.getElementsByTagName('head')[0].appendChild(script);
  // return h;
}

window.addEventListener('load', function(event) {
  document.querySelectorAll('script').forEach((script) => {
    if (script.type === 'custom') {
      if (script.src) {
        fetch(script.src).then(async (v) => {
          script.removeAttribute('src');
          return render(await (await v.blob()).text());
        });
      } else {
        render(script);
      }
    }
  });
});
