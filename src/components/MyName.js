import React, {Component} from "react";

//
// class MyName extends Component {
//     // default값 주기 첫번째 방법.
//     // static defaultProps = {
//     //     name : "순이" // 기본값
//     // };
//     render() {
//         return(
//             <div>안녕하세요 제 이름은 <b>{this.props.name}</b> 입니다.</div>
//         )
//     }
// }


// 함수형 컴포넌트 작성법.  상단에서 컴포넌트를 불러오지 않아도됨.
// 단순히 값 가져와서 뿌릴땐 이렇게 함수형 컴포넌트로 사용하면 좋음.
// const MyName = ( {name} ) => { 비구조와 할당문법.
const MyName = ( {name} ) => {
    return <div>안녕하세요! 제 이름은 {name} 입니다.</div>
};

MyName.defaultProps = { name: "SOONY"};

export default MyName;

