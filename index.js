import { render, Component } from './basic.js';

class BasicApp extends Component {
  constructor() {
    super();
  }
  render() {
    return `<div></div>`;
  }
}

// customElements.define('test-app', BasicApp);

render(BasicApp);

// // const TestApp = (props) => {
// //   console.log(props);
// //   return 'sdfsdfsdf';
// // };
