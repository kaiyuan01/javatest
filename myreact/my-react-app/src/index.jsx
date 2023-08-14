
import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() { // return <h2>I am a {this.props.color} Car!</h2>;
    return <h2>Hi, I am a {this.state.color}/{this.props.color} Car!</h2>;
  }
}

let myElement = (
  <table>
    <tr>
      <th>Name - jsx</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const x = 15;

myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

//
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Car />);
root.render(<Car color="[red: passed props val from parent to child component, via this.props.color in child compo]"/>);

//root.render(myElement);



/* original:

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
