import React from 'react';
import fakeJson from './Api';

// # javascript map 사용법
// array의 item에 function을 적용해서 array를 반환한다.
// item에 접근해서 item을 콘트롤 한다.
/*
const friends= ["jina", "hoijae", "bong","huyn"];
friends.map(function(name) {
  return "@"+name
});
결과
(4) ["@jina", "@hoijae", "@bong", "@huyn"]
* */

// 두종류가 있음 props로 다 가져오거나, ({속성값}) 으로 가져올 수 있음.
// 한종류 이상의 속성을 나열할 떈 ({ 속성1, 속성2 }) 이렇게 사용헌다
function Food( props ) {
// function Food({favorite}) {
  return <h2>I like{props.favorite}</h2>
};

function User( props ) {
  console.log('222: ', props.likeColor);
  return (
      <li id={props.id}> I like <span>{ props.likeColor }</span></li>
  )
}


console.log(  );
function App() {
  return (
      <div>
        <Food favorite="우동" />
        <Food favorite="짬뽕" />
        <Food favorite="라면" />
        <Food favorite="킹크랩" />
        
        <ul>
          {
            Array.from(fakeJson.data).map( (user) => {
              return <User likeColor={ user.color } key={user.id} />
            })
          }
        </ul>
      </div>
  );
}
export default App;
