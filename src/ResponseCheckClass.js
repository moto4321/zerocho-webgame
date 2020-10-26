/*import React, { Component } from "react";

class ResponseCheckClass extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요.',
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const {state} = this.state;
        if(state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요.',
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이 랜덤
        } else if (state === 'ready') { // 성금하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                message: '성급하시군요!',
                state: 'waiting',
            })
        } else if (state === 'now') { // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return{
                    state: 'waiting',
                    result: [...prevState.result, this.endTime - this.startTime],
                    message: '클릭해서 시작하세요.',
                }
            });
        }
    };

    onClickReset = () => {
        this.setState({
            result: [],
        })
    }

    renderAverage = () => {
        const {result} = this.state;
        return (
            result.length === 0 
            ? null 
            : <div> 
                <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={this.onClickReset}>리셋</button>
            </div>
        )
    };

    render() {
        const {message, state} = this.state;
        return(
            <div>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                    {message}
                </div>
                {this.renderAverage()}
            </div>
        )
    }
}

export default ResponseCheckClass;*/


import React, { Component } from "react";

class ResponseCheckClass extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요!',
        result: [],
    }

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const {state} = this.state;
        if(state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요!',
                result: [],
            })
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭!',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            this.setState({
                state: 'waiting',
                message: '너무 성급하시군요!',
            })
        } else if(state === 'now') {
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요!',
                    result: [...prevState.result, this.endTime - this.startTime],
                }
            })
        }
    }


    onClickReset = () => {
        this.setState({
            result: [],
        })
    }


    renderAverage = () => {
        const {result} = this.state;
        return(
            result.length === 0 
            ? null 
            : <div>
                <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={this.onClickReset}>리셋!</button>
            </div>
        )
    };

    render() {
        const {state, message} = this.state;
        return(
            <div>
                <div id="screen" onClick={this.onClickScreen} className={state}>{message}</div>
                {this.renderAverage()}
            </div>
        )
    }
}

export default ResponseCheckClass;