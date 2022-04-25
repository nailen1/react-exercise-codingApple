/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [court, setCourt] = useState(['서울중앙지법', '서울동부지법', '서울서부지법', '서울남부지법', '서울북부지법']);
  let [index, setIndex] = useState(0);
  let [category, setCategory] = useState(['아파트', '토지', '상가', '건물', '자동차', '공장', '기타']);
  let [region, setRegion] = useState(['종로구', '용산구', '영등포구']);
  let [price, setPrice] = useState(['1억원대', '5억원대', '10억원대', '1억 미만', '10억 이상']);
  let [likeit, setLikeit] = useState([0, 0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [inputText, setInputText] = useState('');


  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var dateString = year + '년 ' + month + '월 ' + day + '일';
  function getDate(날짜문자열) { //날짜문자열 형식은 자유로운 편
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var dayOfWeek = week[today.getDay()];
    return dayOfWeek;
  }
  return (
    <div className="App">
      <div className='nav std-mp bg-black'>
        <h4>한눈경매</h4>
      </div>

      <div>
        <input type="text" onChange={(e) => { setInputText(e.target.value); console.log(inputText) }} />
        <button onClick={() => {
          let copyCourt = [...court];
          copyCourt.unshift(inputText);
          setCourt(copyCourt)
        }}>새로운 지방법원 등록</button>
      </div>

      <div className="list std-mp">
        <h4 onClick={() => {
          setModal(!modal)
        }}>{court[0]}</h4>
        <p>#{category[0]} #{region[0]} #{price[1]}</p>
        <p>{dateString} ({getDate()})</p>
      </div>
      {/* 
      <div className="list std-mp">
        <h4>{court[0]}</h4>
        <p>#{category[0]} #{region[1]} #{price[2]}</p>
        <p>{dateString} ({getDate()})</p>
      </div>

      <div className="list std-mp">
        <h4>{court[2]}</h4>
        <p>#{category[2]} #{region[2]} #{price[1]}</p>
        <p>{dateString} ({getDate()})</p>
      </div>

      <div className="list std-mp">
        <h4>{court[2]}</h4>
        <p>#{category[2]} #{region[2]} #{price[1]}</p>
        <p>{dateString} ({getDate()})</p>
        <button onClick={() => {
          let copyCourt = [...court];
          // let copyCourt = court; 하면 화살표가 변경 없음, 동일변수.
          // [... ] 이렇게 해야 변경됨. 새로운 화살표 부여.
          // ... : 괄호 벗겨주세요.
          copyCourt[2] = '대구서부지법';
          console.log(copyCourt === court);
          setCourt(copyCourt);
        }}>법원 변경</button>
      </div> */}
      {/* 
      {
        [1, 2, 3].map(function () {
          return <div>안녕</div>
        })
      } */}
      {
        court.map(function (a, i) {
          return (
            <div className="list std-mp" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setIndex(i);
              }}>{court[i]}</h4>
              <p>#{category[i]} #{region[i]} #{price[i]}</p>
              <p>{dateString} ({getDate()})</p>
              <h4><span onClick={() => {
                let copyLikeit = [...likeit];
                copyLikeit[i] = copyLikeit[i] + 1;
                setLikeit(copyLikeit)
              }}>❤️</span> {likeit[i]} </h4>
              <button onClick={() => {
                let copyCourt = [...court];
                copyCourt.splice(i, 1);
                setCourt(copyCourt);
              }}>삭제</button>
            </div>
          )

        })
      }

      {/* 
      <div className="sort">
        <button onClick={() => {
          let copyCourt = [...court];
          copyCourt.sort();
          console.log(copyCourt);
          setCourt(copyCourt);

        }}>법원명 가나다순 정렬</button>
      </div> */}

      {
        //tenary operator 삼항 연산자
        // 1 == 1 ? '맞음' : '틀림'
        modal == true ? <Modal _modal={modal} _setModal={setModal} _court={court} _setCourt={setCourt} _index={index} color={'white'} /> : null
      }

    </div>
  );

}

function Modal(props) {
  return (
    <>
      <div className="modal-bg" onClick={() => { props._setModal(!props._modal) }}></div>
      <div className="modal-content" style={{ background: props.color }}>
        <h4>{props._court[props._index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copyCourt = [...props._court];
          copyCourt[2] = '대구서구지법';
          props._setCourt(copyCourt)
        }}>법원명 수정하기</button>
        <button onClick={() => { props._setModal(!props._modal) }}>close</button>
      </div>
    </>
  )
}

export default App;
