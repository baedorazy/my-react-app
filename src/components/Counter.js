import React, {Component} from "react";

class Counter extends Component {
    state = {
        number: 0
    };
    
    // 컴포넌트가 만들어 질떄 마다 호출되는 함수.
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    
    //
    //
    // handleIncrease = () => {
    //     console.log(this);
    //     this.setState({
    //         number: this.state.number + 1
    //     })
    // };
    
    handleIncrease() {
        console.log(this);
        this.setState({
            number: this.state.number + 1
        })
    };
    
    handleDecrease = () => {
        this.setState({
            number: this.state.number -1
        })
    };
    
    // 여기서 render는 일반 함수 형태로 작성했는데,
    // 왜 handleIncrease/ Decrease는 애로우 함수로 작성했느냐면 this를 모름.
    // 그냥 함수로 작성하려면 constructor(props)를 작성해야험.
    render () {
        return (
            <div>
                <h1>카운터</h1>
                <div>{this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    };
}

export default Counter;