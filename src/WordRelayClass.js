// import React, { Component } from "react";

// class WordRelayClass extends Component {
//     state = {
//         word: '기우석',
//         value: '',
//         result: '',
//     }


//     onSubmit = (e) => {
//         e.preventDefault();
//         if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//             this.setState({
//                 result: '딩동댕',
//                 word: this.state.value,
//                 value: '',
//             })
//             this.input.focus();
//         } else {
//             this.setState({
//                 result: '땡!',
//                 value: '',
//             })
//             this.input.focus();
//         }
//     }

//     onChange = (e) => {
//         this.setState({value: e.target.value}); // 정확하게 하고 싶으면 target 대신에 currentTarget이라고 해도됨, 이 두개의 차이는 자바스크립트 웹게이 강좌에 나와있음
//     }

//     input;
//     onRefInput = (c) => {this.input = c;}

//     render() {
//         return(
//             <div>
//                 <div>{this.state.word}</div>
//                 <form onSubmit={this.onSubmit}>
//                     <input ref={this.onRefInput} onChange={this.onChange} value={this.state.value}></input>
//                     <button>입력!</button>
//                 </form>
//                 <div>{this.state.result}</div>
//             </div>
//         )
//     }
// }

// export default WordRelayClass;


import React, { Component } from "react";

class WordRelayClass extends Component {
    state = {
        firstWord: '자전거',
        value: '',
        result: '',
    }

    onSubmit = (e) => {
        const {firstWord, value} = this.state;
        e.preventDefault();
        if(firstWord[firstWord.length - 1] === value[0]) {
            this.setState({
                result: '정답!',
                value: '',
                firstWord: value,
            })
        } else {
            this.setState({
                result: '땡!',
                value: '',
            })
        }
    }

    onChange = (e) => {
        this.setState({value: e.target.value})
    }

    input;
    onRefInput = (c) => {this.input = c;}

    render() {
        const {value, firstWord, result} = this.state;
        return(
            <div>
                <div>{firstWord}</div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={value} ref={this.onRefInput}></input>
                    <button>입력!</button>
                </form>
                <div>{result}</div>
            </div>
        )
    }
}

export default WordRelayClass;