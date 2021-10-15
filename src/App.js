/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';

  let [글제목, 글제목변경] =  useState(['남자 코트 추천', '강남 우동 맛집', '윤상현 짱짱짱']); // ES6 destructuring 문법
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    // array또는 object state변경시 복사본(deep copy) 만든다.
    let newArray = [...글제목]; // deep copy(객체, 배열 가능) -> ...
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <button onClick={ 제목바꾸기 }>클릭</button>
      <div className="black-nav">
        <div style={ { color: 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
