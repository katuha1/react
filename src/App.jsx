import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const str1 = 'text1';
  const str2 = 'text1';
  const name = 'user';
  const age = '30';
  const arr = [1, 2, 3, 4, 5];
  const obj = { name: 'john', surname: 'smit' };
  const attr = 'block';
  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;
  const items = (
    <>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>;
    </>
  );
  const num1 = 3;
  const num2 = 2;
  const name1 = 'john';
  const surname = 'smit';
  const num = 4;
  let text;
  const isAdult = true;
  if (isAdult) {
    text = '18';
  } else {
    text = '14';
  };

  let text1;
  const isAdmin = true;
  if (isAdmin) {
    text1 = <><p>admin</p><p>admin</p></> ;
  } else {
    text1 = false;
  };

  const age1 = 10;
  const isAuth = true;
  const isAuth1 = false;
  //7
  return (
    <div>
      <p>React</p>
      <p className="react">React1</p>
      {/* 8 */}
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* 9 */}
      <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
      </ul>
      {/* 10 */}
      <>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
      </>
      <div>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
      </div>
      {/* 11 */}
      <input />
      {/* 12 */}
      <input />
      <input />
      <input />;{/* 13 */}
      <p>{str1}</p>
      <p>{str2}</p>
      {/* 14 */}
      name: {name} <br />
      age: {age}
      {/* 15 */}
      <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
      </ul>
      {/* 16 */}
      <p>{obj.name}</p>
      <p>{obj.surname}</p>
      {/* 17 */}
      <div id={attr}>text</div>
      {/* 19 */}
      {li1}
      {li2}
      {li3}
      {/* 20 */}
      {items}
      {/* 22 */}
      <div>
        <br />
        <input />
        <br />
        <input />
        <br />
      </div>
      {/* 23 */}
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>5</td>
            <td>2</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
      {/* 24 */}
      result: {num1 ** num2}
      <br />
      result: {name1 + ' ' + surname}
      <br />
      result: {Math.sqrt(num)}
      {/* 26 */}
      {text}
      {/* 27 */}
      {text1}
      {/* 28 */}
      {age1 <18? <p>text1</p> : <p>text2</p>}
      {/* 29 */}
      {isAuth ? <p>вы авторизованы</p> : ''}
      {/* 30 */}
      {!isAuth1 && <p>пожалуйста, авторизуйтесь</p>}
    </div>
  );
}

export default App;
