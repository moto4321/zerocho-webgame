import React, { Component } from "react";
import TryClass from './TryClass';

function getNumbers(){
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for(let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseballClass extends Component {
    state = {
        value: '',
        result: '',
        answer: getNumbers(),
        tries: [],
    }

    onSubmit = (e) => {
        const { value, tries, answer } = this.state;
        e.preventDefault();
        if(value === answer.join('')) {
            this.setState((prevState) => {
                return{
                    result: '홈런!',
                    tries: [...prevState.tries, {try: value, result: '홈런!'}],
                }
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            this.input.focus();
        } else {
            const answerArray = value.split('').map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패 ${answer.join(',')} 였습니다`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
                this.input.focus();
            } else {
                for(let i = 0; i < 4; i++) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries: [...prevState.tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼`}],
                        value: '',
                    }
                });
                this.input.focus();
            }
        }
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    input;
    onRefInput = (c) => {this.input = c;}


    render() {
        const {value, tries, result} = this.state;
        return(
            <div>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmit}>
                    <input maxLength={4} ref={this.onRefInput} onChange={this.onChange} value={value}></input> 
                    <button>입력!</button>
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => (
                        <TryClass key={`${i + 1} 차 시도`} tryInfo={v} index={i} />
                    ) )}
                </ul>
            </div>
        )
    }
}

export default NumberBaseballClass;

