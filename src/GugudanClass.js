// import React, { Component } from "react";

// class Gugudan extends Component {
//     state = {
//         first: Math.ceil(Math.random() * 9),
//         second: Math.ceil(Math.random() * 9),
//         result: '',
//         value: '',
//     }

//     onSubmit = (e) => {
//         const {first, second, result, value} = this.state;
//         e.preventDefault();
//         if(parseInt(value) === first * second) {
//             this.setState((prevState) => {
//                 return {
//                 first: Math.ceil(Math.random() * 9),
//                 second: Math.ceil(Math.random() * 9),
//                 value: '',
//                 result: first + 'x' + second + '=' + prevState.value + ' 정답!',
//                 };
//             });
//             this.input.focus();
//         } else {
//             this.setState({
//                 result: '땡!',
//                 value: '',
//             });
//             this.input.focus();
//         }
//     }

//     onChange = (e) => {
//         this.setState({value: e.target.value});
//     }

//     input;

//     onRefInput = (c) => {this.input = c;};

//     render(){
//         const {first, second, result, value} = this.state;
//         return(
//             <div>
//                 <div>{first} 곱하기 {second}</div>
//                 <form onSubmit={this.onSubmit}>
//                     <input ref={this.onRefInput} type="number" value={value} onChange={this.onChange}></input>
//                     <button>입력!</button>
//                 </form>
//                 <div>{result}</div>
//             </div>
//         )
//     }
// }

// export default Gugudan;

import React, { Component } from "react";

class GugudanClass extends Component {
    state = {
        first: Math.floor(Math.random() * 9),
        second: Math.floor(Math.random() * 9),
        value: '',
        result: '',
    }

    onChangeInput = (e) => {
        this.setState({value: e.target.value});
    }

    onSubmitForm = (e) => {
        const {first, second, value} = this.state;
        e.preventDefault();
        if(first*second === parseInt(value)) {
            this.setState({
                value: '',
                result: '정답!',
                first: Math.floor(Math.random() * 9),
                second: Math.floor(Math.random() * 9),
            });
        } else {
            this.setState({
                value: '',
                result: '땡!'
            });
        }
    }

    input;
    onRefInput = (c) => {this.input = c;}

    render() {
        const {first, second, value, result} = this.state;
        return(
            <>
                <div>{first} 곱하기 {second}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input onChange={this.onChangeInput} value={value} ref={this.onRefInput}></input>
                    <button>입력!</button>
                </form>
                <div>{result}</div>
            </>
        )
    }
}

export default GugudanClass;