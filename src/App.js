import React from 'react';

const fakeJson = {
  "page":1,
  "per_page":6,
  "total":12,
  "total_pages":2,
  "data":[
    {
      "id":1,
      "name":"cerulean",
      "year":2000,
      "color":"#98B2D1",
      "pantone_value":"15-4020"
    },
    {
      "id":2,
      "name":"fuchsia rose",
      "year":2001,
      "color":"#C74375",
      "pantone_value":"17-2031"
    },
    {
      "id":3,
      "name":"true red",
      "year":2002,
      "color":"#BF1932",
      "pantone_value":"19-1664",
    }],
    "ad":
    {
      "company":"StatusCode Weekly",
      "url":"http://statuscode.org/",
      "text":"A weekly newsletter focusing on software development"
    }
};

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
function Food( props ) {
// function Food({favorite}) {
  return (
        <h2>I like {props.favorite} </h2>
  )
}

function User( {color} ) {
  console.log('222: ',color);
  return (
      <li> I like <span>{ color }</span></li>
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
              return <User color={ user.color } />
            })
          }
        </ul>
      </div>
  );
}
export default App;
