import React from 'react';
import Calender from './Components/Calender/Calender';
console.log(window.url);
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to React!</h2>
        <Calender />
      </div>
    );
  }
}
