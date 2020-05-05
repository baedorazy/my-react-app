import React, { Component } from "react";
import './Join.css';

class Join extends Component {
    state = {
        name: '',
        mobile: ''
    };
    
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.onCreate(this.state);
        console.log(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    };
    
    render() {
        return(
            <form className="join" onSubmit={this.handleSubmit}>
                <br/>
                <br/>
                <br/>
                
                <label> name:
                    <input type="text"
                           value={this.state.name ||""}
                           placeholder="이름"
                           onChange={this.handleChange}
                           name="name"
                    />
                </label>
                <br/>
                
                <label> Phone:
                    <input type="text"
                           value={this.state.mobile || ""}
                           placeholder="모바일"
                           onChange={this.handleChange}
                           name="mobile"
                    />
                </label>
                <br/>
                <input type="submit" value="등록" />
                <div>{this.state.name}  {this.state.mobile}</div>
            </form>
        );
    };
}

export default Join;
