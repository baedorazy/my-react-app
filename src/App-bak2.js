import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("Hello");
    }
    state = {
        count: 1
    };
    add = () => {
        //this.setState({ count: this.state.count +1 });
        this.setState(current => ({count: current.count + 1 }));
        console.log("add", this.state.count );
    };
    minus = () => {
        // this.setState({ count: this.state.count -1 });
        this.setState(current => ({count: current.count - 1 }));
        console.log("-", this.state.count );
    };
    componentDidMount() {
        console.log("DidMount");
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I just updated!");
    }
    componentWillUnmount() {
        console.log("컴포넌트가 떠날때 호출됨, 다른페이지 호출할떄 등등 ");
    }
    
    render() {
        console.log("render");
        return (
            <div>
                <h1>Im a class component: { this.state.count }</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}
export default App;
