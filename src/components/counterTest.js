import React, { useState } from 'react';
import Container from './Container';
import Header from './Header';
import UseCallbackTest from './UseCallbackTest';

function Jintest() {
  const [count, setCount] = useState(0);
  const [visable, setVisable] = useState(true);

  const increaseCntA = () => {
    console.log('함수 호출 A',count);
    setCount( count + 1 );
  }

  const decreaseCntA = () => {
    console.log('함수 호출 A',count);
    setCount( count - 1 );
  }

  const increaseCntB = () => {
    console.log('함수 호출 B',count);
    setCount( count + 1 );
  }

  const increaseCounter = (param) =>{
    console.log('param ',param);
    console.log('함수 호출 ',count);
    setCount( param === '+' ? count + 1 : count - 1 );
  }

  const objMemberInfo = { name: "홍길동", age: 30 };
  const objMemberInfo1 = { name1: "홍길동11", age1: 31 };
  const objMemberInfo2 = { name2: "홍길동22", age2: 32 };

  console.log(`out >>`,{...objMemberInfo,...objMemberInfo1,...objMemberInfo2});

  return (

    <div>
      <button onClick={()=>setVisable(!visable)}> {visable ? '감추기' : '보이기'}</button>
      {visable &&
        <>
          <p>Count: {count}</p>
          {/* <button onClick={increaseCntA} >Count 증가 A</button>
          <button onClick={decreaseCntA} >Count 감소 A</button>
          <button onClick={increaseCntB} >Count 증가 B</button> */}
          <button onClick={() => increaseCounter('+')}>Count 증가</button>
          <button onClick={() => increaseCounter('-')}>Count 감소</button>
          <Container info={objMemberInfo} />
          <Container info={{ name: '성춘양', 'age': 44 }} />
          <br/>
          <UseCallbackTest />
        </>
      }
    </div>

  );
}


export default Jintest;

