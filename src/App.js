/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  

  let [글제목, 글제목변경] =  useState(['남자 코트 추천', '강남 우동 맛집', '윤상현 짱짱짱']); // ES6 destructuring 문법
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [누른제목, 누른제목변경] = useState(0);
  let [modal, modal변경] = useState(true); // 모달창 on/off 스위치 (모달에서 많이 사용함)

  let [입력값, 입력값변경] = useState('');

  // 자주 사용됨
  // function 반복된UI () {
  //   let 어레이 = [];
  //   for (let i = 0; i < 어레이.length; i++){
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이;
  // }

  function 따봉증가(인덱스) {
    let 뉴따봉 = [...따봉];
    뉴따봉[인덱스]++;
    console.log(뉴따봉);
    따봉변경(뉴따봉);
  }

  let posts = '강남 고기 맛집';

  // 자주 사용됨
  // function 제목바꾸기() { 
  //   // array또는 object state변경시 복사본(deep copy) 만든다.
  //   let newArray = [...글제목]; // deep copy(객체, 배열 가능) -> ...
  //   newArray[0] = '여자코트 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color: 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      { 
        글제목.map((글, 인덱스, 어레이이) => { 
          console.log('인덱스', 인덱스);
          return (
          <div className="list">
            <h3 onClick={ () => { 누른제목변경(인덱스) } } >{ 글 } <span onClick={ () => { 따봉증가(인덱스) } }>👍</span> { 따봉[인덱스] } </h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
          );
        })
      }

      <input onChange={ (e) => { 입력값변경(e.target.value); } } />
      { 입력값 }
      <button onClick={ () => {modal변경(!modal)} }>열고 닫기</button>
      
      { 
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
